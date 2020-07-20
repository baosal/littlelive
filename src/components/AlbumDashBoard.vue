<template>
  <div class="mx-4">
    <div v-if="this.isShowAlbumDetail === false" class="bd-snippet bd-is-horizontal bd-is-3">
      <div class="bd-snippet-preview">
        <div class="tabs is-large is-boxed is-medium">
          <ul>
            <li class="is-active">
              <a>
                <span>Albums({{this.listAlbum.length}})</span>
              </a>
            </li>
            <li>
              <a>
                <span>Media({{this.listAlbum.length - 4}})</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="bd-snippet-code highlight-full bd-is-more bd-is-more-clipped">
          <div class="columns is-multiline">
            <div class="column is-one-quarter">
              <AddCard type="album"></AddCard>
            </div>
            <div class="column is-one-quarter" v-for="(album,index) in this.listAlbum" :key="index">
              <AlbumCard :albumData="album" @click="gotoSelectedAlbum(album)"></AlbumCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <PhotoDashBoard :albumID="this.selectedAlbum.id" @closeAlbumDetail="() => this.isShowAlbumDetail = false"></PhotoDashBoard>
    </div>
  </div>
</template>
<script>
import AlbumCard from "./AlbumCard";
import PhotoDashBoard from "./PhotoDashBoard";
import AddCard from "./AddCard";
import { mapGetters, mapActions } from "vuex";
import { randomInt } from "@/common";
export default {
  name: "AlbumDashBoard",
  components: {
    PhotoDashBoard,
    AlbumCard,
    AddCard
  },
  computed: {
    ...mapGetters(["listAlbum"])
  },
  data() {
    return {
      selectedAlbum: {},
      isShowAlbumDetail: false
    };
  },
  methods: {
    ...mapActions(["fetchListAlbum"]),
    gotoSelectedAlbum: function(album) {
      this.isShowAlbumDetail = !this.isShowAlbumDetail;
      this.selectedAlbum = album;
    }
  },
  created() {
    this.fetchListAlbum({ albumCount: randomInt(20) });
  }
};
</script>
<style>
</style>