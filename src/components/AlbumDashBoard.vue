<template>
  <div class="mx-4">
    <div v-if="this.isShowAlbumDetail === false" class="bd-snippet bd-is-horizontal bd-is-3">
      <div class="bd-snippet-preview">
        <div class="tile is-parent">
          <div class="tile is-child">
            <div class="tabs is-large is-boxed">
              <ul>
                <li class="is-active">
                  <a>
                    <span class="icon is-small">
                      <i class="fas fa-image" aria-hidden="true"></i>
                    </span>
                    <span>Albums({{this.listAlbum.length}})</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small">
                      <i class="fas fa-music" aria-hidden="true"></i>
                    </span>
                    <span>Media({{this.listAlbum.length - 4}})</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="tile is-child">
            <div class="tabs is-large is-right filter">
              <ul>
                <li>
                  <div class="select">
                    <select v-model="filterType">
                      <option :value="null">Sort by</option>
                      <option value="loveincrease">Love increase</option>
                      <option value="lovedecrease">Love decrease</option>
                      <option value="follow">Followed</option>
                      <option value="unfollow">Unfollowed</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bd-snippet-code highlight-full bd-is-more bd-is-more-clipped">
          <div class="columns is-multiline">
            <div class="column is-one-quarter">
              <AddCard type="album"></AddCard>
            </div>
            <div class="column is-one-quarter" v-for="album in this.listAlbum" :key="album.id">
              <AlbumCard :albumID="album.id" @click="openAlbum(album)"></AlbumCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <PhotoDashBoard
        :albumID="this.selectedAlbum.id"
        @closeAlbumDetail="() => this.isShowAlbumDetail = false"
      ></PhotoDashBoard>
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
    ...mapGetters(["filteredListAlbum"]),
    listAlbum: function() {
      return this.filteredListAlbum(this.filterType);
    }
  },
  data() {
    return {
      selectedAlbum: {},
      isShowAlbumDetail: false,
      filterType: null
    };
  },
  methods: {
    ...mapActions(["fetchListAlbum"]),
    openAlbum: function(album) {
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
select {
  border: 0 !important;
}
.filter {
  height: 100%;
}
</style>