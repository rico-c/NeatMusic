export const changeSong = songList => ({
    type: 'CHANGE',
    songList
})
export const controlPlay = songOrder => ({
    type: 'CONTROL',
    songOrder
})