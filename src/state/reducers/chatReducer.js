import {CHAT_ACTION_TYPES} from "../types";

const initialState = {
    messageList : [],
    currentUser: null
}

export default function chatReducer(state = initialState, action) {
    switch (action.type) {
        case CHAT_ACTION_TYPES.SET_MESSAGE_LIST:
            return {
                ...state,
                messageList : action.payload
            }

        case CHAT_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : action.payload
            }
        default:
            return state
    }
}
