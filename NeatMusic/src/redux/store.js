import { createStore } from 'redux';

const initialState = {
    songOrder: 0,
    songList: []
}

const NeatMusicReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE':
            state.songList = action.songList;
            state.songOrder = 0;
            return state;
        case 'CONTROL':
            if (action.controlAction === 'last') {
                state.songOrder = state.songOrder === 0 ? state.songOrder - 1 : state.songList.length;
            } else if (action.controlAction === 'next') {
                state.songOrder = state.songOrder === state.songList.length ? state.songOrder + 1 : 0;
            }
            return state;
        default:
            return state;
    }
}

let store = createStore(NeatMusicReducer)

export default store