import _ from 'lodash'
export default {
  updateListAlbum(state, payload) {
    state.listAlbum = payload
  },

  updateAlbumDetail(state, payload) {
    let album = _.find(state.listAlbum, album => { return album.id === payload.id })
    album.content = payload.content
    album.listPhoto = payload.listPhoto
    album.date = new Date()

    // update love count of album
    let loveCount = 0
    album.listPhoto.forEach(element => {
      loveCount += element.love
    });
    album.love = loveCount
  },
  
  updatePhotoDetail(state, payload) {
    let album = _.find(state.listAlbum, album => { return album.id === payload.id })
    album.content = payload.content
    album.listPhoto = payload.listPhoto
    album.date = new Date()

    // update love count of album
    let loveCount = 0
    album.listPhoto.forEach(element => {
      loveCount += element.love
    });
    album.love = loveCount
  },
  addAlbum(state, payload) {
    let newAlbum = _.cloneDeep(state.listAlbum[0])
    newAlbum = {...newAlbum,...payload}
    state.listAlbum.splice(0, 0, { ...newAlbum });
  },

  addPhoto(state, payload) {
    let parentAlbum = _.find(state.listAlbum, album => { return album.id === payload.parentID })
    parentAlbum.listPhoto.splice(0, 0, { ...payload.data });
  },
}