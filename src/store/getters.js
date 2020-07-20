import _ from "lodash"

export default {
  listAlbum(state) {
    return state.listAlbum
  },
  selectedAlbum(state) {
    return (albumID) => {
      return _.find(state.listAlbum, album => {
        return album.id === albumID;
      });
    }
  },
  selectedPhoto(state, getters) {
    let selectedAlbum = getters ? getters.selectedAlbum : this.selectedAlbum(state)
    return (photoID, albumID) => {
      let album = selectedAlbum(albumID)
      return _.find(album.listPhoto, photo => {
        return photo.id === photoID;
      });
    }
  }
}
