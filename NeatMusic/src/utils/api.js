const _api = 'https://www.mptab.cn:3001';

// 歌手分类列表
export const singerCate = _api + '/artist/list';
// 热门歌单分类
export const songCateHot = _api + '/playlist/hot';
// 搜索音乐
export const search = _api + '/search'
// 相似歌手
export const similar = _api + '/simi/artist'
// 排行榜
export const ranking = _api + '/top/list?idx=1'
// 歌手榜
export const singerRank = _api + '/toplist/artist'
// 怀旧
export const classical = _api + '/top/playlist?cat=怀旧&limit=1'
// 摇滚
export const rock = _api + '/top/playlist?cat=摇滚&limit=1'
// 流行
export const pop = _api + '/top/playlist?cat=流行&limit=1'
// 嘻哈
export const hiphop = _api + '/top/playlist?cat=说唱&limit=1'
// 欧美
export const west = _api + '/top/playlist?cat=欧美&limit=1'
// 日语
export const japan = _api + '/top/playlist?cat=日语&limit=1'
// 民谣
export const minyao = _api + '/top/playlist?cat=民谣&limit=1'
// 金属
export const metal = _api + '/top/playlist?cat=金属&limit=1'
// 朋克
export const punk = _api + '/top/playlist?cat=朋克&limit=1'
// 英伦
export const eng = _api + '/top/playlist?cat=英伦&limit=1'

// 播放列表详情
export const listDetail = _api + '/playlist/detail?id='
//  热门评论
export const hotComment = _api + '/comment/hot?type=0&id='
// 歌单分类
export const songCate = _api + '/playlist/catlist';
// 获取音乐
export const getMusic = _api + '/song/url?br=320000&id=';
// 获取歌词
export const lyric = _api + '/lyric?id=';