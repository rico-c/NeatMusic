import { createStore } from 'redux';

const initialState = {
    songOrder: 0,
    songList: [],
    songId: ''
}

const NeatMusicReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE':
            return Object.assign({}, state, {
                songList: action.songList
            })
        case 'CONTROL':
            return Object.assign({}, state, {
                songOrder: action.songOrder
            })
        case 'ID':
            return Object.assign({}, state, {
                songId: action.songId
            })
        default:
            return state;
    }
}

let store = createStore(NeatMusicReducer)

export default store