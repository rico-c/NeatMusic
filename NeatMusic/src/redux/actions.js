export const changeSong = songList => ({
    type: 'CHANGE',
    songList
})
export const controlPlay = controlAction => ({
    type: 'CONTROL',
    controlAction
})