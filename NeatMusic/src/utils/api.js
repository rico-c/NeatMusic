const _api = 'http://10.0.2.2:3000';

// 歌手分类列表
export const singerCate = _api + '/artist/list';
// 歌单分类
export const songCate = _api + '/playlist/catlist';
// 热门歌单分类
export const songCateHot = _api + '/playlist/hot';
// 获取音乐
export const getMusic = _api + '/song/url'
// 搜索音乐
export const search = _api + '/search'
// 相似歌手
export const similar = _api + '/simi/artist'
// 排行榜
export const ranking = _api + '/top/list?idx=1'
// 歌手榜
export const singerRank = _api + '/toplist/artist'
// 每日歌单
export const daily = _api + '/recommend/resource'
// 怀旧
export const classical = _api + '/top/playlist?cat=怀旧&limit=1'
// 摇滚
export const rock = _api + '/top/playlist?cat=摇滚&limit=1'
// 流行
export const pop = _api + '/top/playlist?cat=流行&limit=1'
// 嘻哈
export const hiphop = _api + '/top/playlist?cat=说唱&limit=1'
// 播放列表详情
export const listDetail = _api + '/playlist/detail?id='