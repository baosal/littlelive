import _ from 'lodash'
import getters from './getters'
export default {
  updateListAlbum(state, payload) {
    state.listAlbum = payload
  },

  updateAlbumDetail(state, payload) {
    let album = getters.selectedAlbum(state)(payload.id)
    album.content = payload.content
    album.listPhoto = payload.listPhoto
    album.date = new Date()
  },

  updateAlbumLoveCount(state, albumID) {
    let album = getters.selectedAlbum(state)(albumID)
    album.love += 1
  },
  
  updatePhotoLoveCount(state, payload) {
    let photo = getters.selectedPhoto(state)(payload.photoID, payload.albumID)
    photo.love += 1
  },
  
  updatePhotoDetail(state, payload) {
    let photo = getters.selectedPhoto(state)(payload.params.photoID, payload.params.albumID)
    photo.content = payload.data.content
    photo.public = payload.data.public
    photo.createdBy = payload.data.createdBy
    photo.location = payload.data.location
    photo.date = new Date()
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