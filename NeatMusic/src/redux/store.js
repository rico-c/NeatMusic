import { createStore } from 'redux';

const initialState = {
    songOrder: 0,
    songList: []
}

const NeatMusicReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE':
            // console.warn(action.songList)
            return Object.assign({}, state, {
                songList: action.songList
            })
        case 'CONTROL':
            return Object.assign({}, state, {
                songOrder: action.songOrder
            })
        default:
            return state;
    }
}

let store = createStore(NeatMusicReducer)

export default store