<template>
  <div class="card add-card mx-1">
    <div class="card-image cusor container" @click="toggleModal()">
      <figure class="image" :class="[this.type == 'album' ? 'is-1by1':'is-16by9']">
        <img src="https://picsum.photos/id/534/1600" />
        <span class="icon icon-center">
          <i class="fas fa-plus-circle fa-5x" aria-hidden="true"></i>
        </span>
      </figure>
    </div>
    <div class="card-content">
      <p>{{this.detailTexts}}</p>
    </div>
    <div class="modal" :class="[this.addNewAlbum ? 'is-active' : '']">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">New album informations</p>
        </header>
        <section class="modal-card-body">
          <div class="content">
            <div class="field">
              <label class="label">Album name</label>
              <div class="control">
                <input
                  v-model="newAlbum.name"
                  class="input is-success"
                  type="text"
                  placeholder="Text input"
                  value="bulma"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Album content</label>
              <div class="control">
                <textarea v-model="newAlbum.content" class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>
            <div class="field">
              <label class="label">Attach Photo</label>
              <div class="control">
                <input @change="handleUploadImg" type="file" accept="image/*" />
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addAlbum(newAlbum); toggleModal()">Add</button>
          <button class="button" @click="toggleModal()">Close</button>
        </footer>
      </div>
    </div>
    <div class="modal" :class="[this.addNewPhoto ? 'is-active' : '']">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">New album informations</p>
        </header>
        <section class="modal-card-body">
          <div class="content">
            <div class="file has-name is-fullwidth">
              <label class="file-label">
                <input @change="handleUploadImg" class="file-input" type="file" accept="image/*" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Choose a file…</span>
                </span>
                <span class="file-name">{{this.newPhoto.photo}}</span>
              </label>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addAlbum(newAlbum); toggleModal()">Add</button>
          <button class="button" @click="toggleModal()">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import Vue from "vue";
export default {
  name: "AddCard",
  props: {
    parentID: null,
    type: null
  },
  computed: {
    detailTexts: function() {
      return this.type == "album" ? "Create new Album" : "Add Photo";
    }
  },
  data() {
    return {
      addNewAlbum: false,
      addNewPhoto: false,
      newAlbum: {
        id: Vue.faker().random.uuid(),
        name: null,
        photo: null,
        love: 0,
        follow: false,
        content: null,
        listPhoto: []
      },
      newPhoto: { photo: null }
    };
  },
  methods: {
    ...mapMutations(["addAlbum", "addPhoto"]),
    toggleModal() {
      if (this.type == "album") {
        this.addNewAlbum = !this.addNewAlbum;
      } else {
        this.addNewPhoto = !this.addNewPhoto;
      }
    },
    handleUploadImg(e) {
      const selectedImg = e.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        if (this.type == "album") {
          this.newAlbum.photo = e.target.result;
        } else {
          this.newPhoto.photo = e.target.result;
        }
      };
      reader.readAsDataURL(selectedImg);
    }
  },
  created() {}
};
</script>
<style>
.cusor {
  cursor: pointer;
}
.icon-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: aliceblue;
}
.add-card {
  height: 100%;
}
</style>