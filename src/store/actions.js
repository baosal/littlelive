import albumService from '../services/albumService'
export default {
  async fetchListAlbum({ commit }, params) {
    try {
      const result = await albumService.fetchAlbumDashboardInfo(params)
      let data = result || {}
      commit('updateListAlbum', data)
    } catch (e) {
      throw new Error(e.message || e)
    }
  },
  async fetchPhotoDashBoardDetail({ commit }, params) {
    try {
      const result = await albumService.fetchPhotoDashBoardDetail(params)
      let data = result || {}
      commit('updateAlbumDetail', data)
    } catch (e) {
      throw new Error(e.message || e)
    }
  },
  async fetchPhotoDetail({ commit }, params) {
    try {
      const result = await albumService.fetchPhotoDetail(params)
      let data = result || {}
      commit('updatePhotoDetail', data)
    } catch (e) {
      throw new Error(e.message || e)
    }
  }
}
