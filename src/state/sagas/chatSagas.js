import {takeLatest, take, put, call, fork, select} from 'redux-saga/effects';
import {CHAT_ACTION_TYPES} from '../types';
import {io} from 'socket.io-client';
import {eventChannel} from 'redux-saga';

function connect() {
  const socket = io('ws://172.28.160.1:5002');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      console.log('Socket connected');
    });
  });
}

function* listenMessageEvents(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let newMessage = yield take(channel);
    console.log('newMessage', newMessage);
    const {messageList} = yield select(state => state.chat);

    yield put({
      type: CHAT_ACTION_TYPES.SET_MESSAGE_LIST,
      payload: [...messageList, {...newMessage.payload, time: newMessage.time}],
    });
  }
}

export function* subscribe(socket) {
  return new eventChannel(emit => {
    const updateMessages = newMessage => {
      console.log('listened data', newMessage);
      return emit(newMessage);
    };
    console.log('socket listening on messages');
    socket.on('event', updateMessages);
    return () => {};
  });
}

export function* addMessage(socket) {
  while (true) {
    const messageObj = yield take(CHAT_ACTION_TYPES.SEND_NEW_MESSAGE);
    console.log('saga messageObj', messageObj);
    socket.emit('event', messageObj);
  }
}

function* initFetching(action) {
  const {userName} = action?.payload;
  yield put({
    type: CHAT_ACTION_TYPES.SET_CURRENT_USER,
    payload: userName,
  });
  const socket = yield call(connect);
  yield fork(listenMessageEvents, socket);
  yield fork(addMessage, socket);
}

export default function* chatSagas() {
  yield takeLatest(CHAT_ACTION_TYPES.INIT_FETCHING, initFetching);
}
