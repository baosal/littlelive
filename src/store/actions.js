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
  async fetchAlbumDetail({ commit }, params) {
    try {
      const result = await albumService.fetchAlbumDetail(params)
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
      commit('updatePhotoDetail', {data, params})
    } catch (e) {
      throw new Error(e.message || e)
    }
  }
}
