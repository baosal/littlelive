import _ from "lodash"

export default {
  listAlbum(state) {
    return state.listAlbum
  },
  filteredListAlbum(state) {
    return filterType => {
      if (filterType) {
        switch (filterType) {
          case "loveincrease":
            return _.orderBy(state.listAlbum, ['love'], ['asc']);
          case "lovedecrease":
            return _.orderBy(state.listAlbum, ['love'], ['desc'])
          case "follow":
            return _.filter(state.listAlbum, { 'follow': true })
          case "unfollow":
            return _.filter(state.listAlbum, { 'follow': false })
        }
      }
      return state.listAlbum
    }
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
