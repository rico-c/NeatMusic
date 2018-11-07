export const changeSong = songList => ({
    type: 'CHANGE',
    songList
})
export const controlPlay = songOrder => ({
    type: 'CONTROL',
    songOrder
})
export const songId = songId => ({
    type: 'ID',
    songId
})

