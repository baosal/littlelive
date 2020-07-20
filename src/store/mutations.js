import _ from 'lodash'
import getters from './getters'
import Vue from 'vue'
export default {
  updateListAlbum(state, payload) {
    state.listAlbum = payload
  },

  updateAlbumDetail(state, payload) {
    let album = getters.selectedAlbum(state)(payload.id)
    // //prevent album content is change after fetch new data from fake API, remove this line in real project
    // payload.content = album.content ? album.content :  payload.content
    Object.assign(album, payload)
  },
  
  updatePhotoDetail(state, payload) {
    let photo = getters.selectedPhoto(state)(payload.photoID, payload.albumID)
    photo.updated = new Date()
    Object.assign(photo, payload.data)
  },
  
  addAlbum(state, payload) {
    let newAlbum = {isNew : true, follow: false, photoCount: 0, videoCount: 0, id: Vue.faker().random.uuid()}
    Object.assign(newAlbum,payload)
    state.listAlbum.splice(0, 0, { ...newAlbum });
  },

  addPhoto(state, payload) {
    let newPhoto = {love: 0, follow: false, id: Vue.faker().random.uuid()}
    Object.assign(newPhoto, payload.data)
    let album = getters.selectedAlbum(state)(payload.albumID)
    album.listPhoto.splice(0, 0, { ...newPhoto });
  },
}