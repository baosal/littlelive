<template>
  <div class="card mx-1 hover-zoom cusor" @click="$emit('openModal')">
    <div class="card-image">
      <figure class="image is-4by3 has-place-holder-img">
        <img :src="this.photo.photo" />
        <div class="column is-6 bottom-left has-text-left">
          <span class="icon has-text-danger">
            <i @click="makeLove()" class="fas fa-heart cusor mr-1" aria-hidden="true"></i>
            <p class="has-text-info-light">{{this.photo.love}}</p>
          </span>
        </div>
        <div class="column is-6 bottom-right has-text-right">
          <span v-if="this.photo.follow" class="icon has-text-warning">
            <i @click="follow()" class="fas fa-star cusor mr-1" aria-hidden="true"></i>
          </span>
          <span v-else class="icon has-text-warning">
            <i @click="follow()" class="far fa-star cusor mr-1" aria-hidden="true"></i>
          </span>
        </div>
      </figure>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "PhotoCard",
  props: {
    photoID: null,
    albumID: null
  },
  computed: {
    ...mapGetters(["listAlbum", "selectedPhoto"])
  },
  data() {
    return {
      photo: {}
    }
  },
  methods: {
    ...mapActions(["fetchPhotoDetail"]),
    ...mapMutations(["updateAlbumLoveCount", "updatePhotoLoveCount"]),
    makeLove: function() {
      this.updatePhotoLoveCount({
        photoID: this.photoID,
        albumID: this.albumID
      });
      this.updateAlbumLoveCount(this.albumID);
    },
    follow: function() {
      this.photo.follow = !this.photo.follow;
    }
  },
  created() {
    this.fetchPhotoDetail({ photoID: this.photoID, albumID: this.albumID });
    this.photo = this.selectedPhoto(this.photoID, this.albumID);
  }
};
</script>
<style>
img {
  border-radius: 10px;
}
.cusor {
  cursor: pointer;
}
.star-icon {
  color: #e6e616;
}
.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.has-place-holder-img {
  background-image: photo("https://picsum.photos/id/3/400");
}
.container {
  position: relative;
  text-align: center;
  color: white;
}

.bottom-left {
  position: absolute;
  left: 16px;
  bottom: 0;
}

.bottom-right {
  position: absolute;
  right: 16px;
  bottom: 0;
}
.hover-zoom:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.hover-zoom {
  transition: 0.3s ease-in-out;
}
</style>