import {CHAT_ACTION_TYPES} from "../types";

export const _initFetchMessages = (userName) => {
    return {
        type: CHAT_ACTION_TYPES.INIT_FETCHING,
        payload: {userName}
    }
}


export const _sendNewMessage = (messageObj) => {
    return {
        type: CHAT_ACTION_TYPES.SEND_NEW_MESSAGE,
        payload: messageObj
    }
}
