export const changeSong = songId => ({
    type: 'CHANGE',
    songId
})
export const controlPlay = controlAction => ({
    type: 'CONTROL',
    controlAction
})