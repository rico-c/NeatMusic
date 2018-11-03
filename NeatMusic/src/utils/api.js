const _api = 'http://127.0.0.1:3000';

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
export const ranking = _api + '/top/list'
// 歌手榜
export const singerRank = _api + '/toplist/artist'