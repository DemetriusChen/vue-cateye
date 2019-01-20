import getData from '../../api/getData'

const state = {
    movieId: null,
    tvId: null,
    previewPage: 1,
    releasedPage: 1,
}
const getters = {
    movieId: state => state.movieId,
    tvId: state => state.tvId,
}
const mutations = {
    setMovieId(state, payload) {
        state.movieId = payload.movieId
    },
    setPreViewPage(state, payload) {
        state.previewPage = payload.previewPage
    },
    setReleasedPage(state, payload) {
        state.releasedPage = payload.releasedPage
    },
    setTvId(state, payload) {
        state.tvId = payload.tvId
    }

}
const actions = {
    async getCarousel() {
        let res = await getData.getCarousel()
        return res
    },
    /*
    * 获取正在上映的电影的数据
    * @page:页码，用于分页
    *
    * */
    async getMovieReleased({commit}, {page}) {
        let res = await getData.getMovieReleasedList({page})
        commit('setReleasedPage', {page})
        return res
    },
    /*
    * 获取未上映电影的数据
    * @page:页码，用于分页
    *
    * */
    async getMoviePreview({commit}, {page}) {
        let res = await getData.getMoviePreviewList({page})
        commit('setPreViewPage', {page})
        return res
    },

    //获取全部未上映电影的数据

    async getMoviePreviewAll() {
        let res = await getData.getMoviePreviewListAll()
        return res
    },

    //获取全部正在上映电影的数据

    async getMovieReleasedListAll() {
        let res = await getData.getMovieReleasedListAll()
        return res
    },

    //获取指定id的电影的细节
    async getMovieDetails({commit}, {movieId}) {
        let res = await getData.getMovieDetails({movieId})
        commit('setMovieId', {movieId})
        return res
    },

    //获取指定id的电影的评论
    async getMovieComments({commit}, {movieId}) {
        let res = await getData.getMoviesComments({movieId})
        commit('setMovieId', {movieId})
        return res
    },
    //获取全部电视剧的数据

    async getTvSeries() {
        let res = await getData.getTvList()
        return res
    },
    //获取指定id的电视剧的细节
    async getTvDetails({commit}, {tvId}) {
        let res = await getData.getTvDetails({tvId})
        commit('setTvId', {tvId})
        return res
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
