import {all} from 'redux-saga/effects';

import chatSagas from "./chatSagas";

export default function* initSagaWatchers(){
    yield all(([
        chatSagas()
    ]))
}
