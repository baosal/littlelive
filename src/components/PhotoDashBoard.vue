<template>
  <div class="tile is-vertical">
    <div class="tile has-background-warning-light mx-1 mb-2">
      <div class="tile is-parent">
        <div class="tile is-child is-10 has-text-left has-text-grey-dark">
          <p class="title text-overflow has-text-primary-dark">{{this.albumDetail.name}}</p>
          <p class="subtitle has-text-grey-dark">{{this.albumDetail.date}}</p>
          <p class>{{this.albumDetail.content}}</p>
        </div>
        <div class="tile is-child">
          <div class="bd-snippet-preview">
            <div class="has-text-centered has-text-warning mt-3">
              <span v-if="this.albumDetail.follow" class="icon">
                <i @click="follow()" class="fas fa-star mr-1 cusor fa-4x" aria-hidden="true"></i>
              </span>
              <span v-else class="icon">
                <i @click="follow()" class="far fa-star mr-1 cusor fa-4x" aria-hidden="true"></i>
              </span>
              <p>Follow Album</p>
            </div>
            <nav class="level mt-4">
              <div class="level-item has-text-centered has-text-danger">
                <div>
                  <p class="heading">Love</p>
                  <p class="title has-text-danger">{{this.albumDetail.love}}</p>
                </div>
              </div>
              <div class="level-item has-text-centered has-text-info">
                <div>
                  <p class="heading">Photo</p>
                  <p class="title has-text-info">{{this.albumDetail.listPhoto.length}}</p>
                </div>
              </div>
              <div class="level-item has-text-centered has-text-primary">
                <div>
                  <p class="heading">Videos</p>
                  <p class="title has-text-primary">{{this.albumDetail.videoCount}}</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <button class="delete is-large has-background-danger-dark" @click="$emit('closeAlbumDetail')"></button>
    </div>
    <!-- <div class="bd-snippet-preview">
    <div class="bd-snippet-code highlight-full bd-is-more bd-is-more-clipped">-->
    <div class="columns is-multiline">
      <div class="column is-one-quarter">
        <AddCard type="photo" :parentID="this.albumDetail.id"></AddCard>
      </div>
      <div
        class="column is-one-quarter"
        v-for="(photo, index) in this.albumDetail.listPhoto"
        :key="index"
      >
        <PhotoCard :photoID="photo.id" :albumID="albumID"></PhotoCard>
        <!-- </div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import PhotoCard from "./PhotoCard";
import AddCard from "./AddCard";
import { mapGetters, mapActions } from "vuex";
import { randomInt } from "@/common";
import _ from "lodash";

export default {
  name: "AlbumDashBoard",
  components: {
    PhotoCard,
    AddCard
  },
  computed: {
    ...mapGetters(["listAlbum"])
  },
  props: {
    albumID: null
  },
  data() {
    return {
      albumDetail: {}
    };
  },
  methods: {
    ...mapActions(["fetchPhotoDashBoardDetail"]),
    follow: function() {
      this.albumDetail.follow = !this.albumDetail.follow;
    }
  },
  created() {
    this.albumDetail = _.find(this.listAlbum, album => {
      return album.id === this.albumID;
    });
    // Fetch more information of current photo dashboard
    if (this.albumDetail.listPhoto && this.albumDetail.listPhoto.length === 0) {
      this.fetchPhotoDashBoardDetail({
        imageCount: randomInt(20),
        id: this.albumID
      })
    }
  }
};
</script>
<style>
.column-grid {
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>