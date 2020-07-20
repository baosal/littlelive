<template>
  <div class="card hover-zoom mx-1">
    <div class="card-image cusor" @click="$emit('click')">
      <figure class="image is-4by3 has-place-holder-img">
        <img :src="this.albumData.photo" style />
      </figure>
    </div>
    <div class="card-content">
      <p class="title has-text-left text-overflow has-text-primary-dark">{{this.albumData.name}}</p>
      <p class="subtitle has-text-left has-text-grey">{{this.detailTexts}}</p>
    </div>
    <footer class="card-footer mx-5 py-2">
      <div class="column is-6 has-text-left">
        <span class="icon has-text-danger">
          <i class="fas fa-heart mr-1" aria-hidden="true"></i>
          <p class="has-text-info-dark">{{this.albumData.love}}</p>
        </span>
      </div>
      <div class="column is-6 has-text-right">
        <span v-if="this.albumData.follow" class="icon has-text-warning">
          <i @click="follow()" class="fas fa-star mr-1 cusor" aria-hidden="true"></i>
        </span>
        <span v-else class="icon has-text-warning">
          <i @click="follow()" class="far fa-star mr-1 cusor" aria-hidden="true"></i>
        </span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "AlbumCard",
  props: {
    albumData: { img: null, love: 0, follow: false }
  },
  computed: {
    detailTexts: function() {
      return `Photos ${this.albumData.photoCount}, Videos ${this.albumData.videoCount}`;;
    }
  },
  data() {
    return {};
  },
  methods: {
    follow: function() {
      this.albumData.follow = !this.albumData.follow;
    }
  },
  created() {}
};
</script>
<style>
.card {
  border-radius: 15px;
}
img {
  border-radius: 15px 15px 0 0;
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
.hover-zoom:hover {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
.hover-zoom {
	transition: .3s ease-in-out;
}
/* .has-place-holder-img {
    background-image: photo("https://picsum.photos/id/3/400");
} */
</style>