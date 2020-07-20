
import Vue from 'vue'
import { randomInt } from '../common'
export default {
    // Get list album with few informations
    async fetchAlbumDashboardInfo(params) {
        let result = []
        for (let i = 0; i < params.albumCount; i++) {
            result.push({
                id: Vue.faker().random.uuid(),
                name: Vue.faker().name.findName(),
                isNew: false, // to differentiate Album we get from fake API or Album from create new
                photo: `https://picsum.photos/id/${randomInt(500)}/1600`,
                photoCount: randomInt(10),
                videoCount: randomInt(10),
                love: randomInt(20), // Total count of imgs in this album
                follow: Vue.faker().random.boolean(), // Can be used for filter albums
                listPhoto: [],
            })
        }
        return result
    },
    // Get more informations of the album
    async fetchAlbumDetail(params) {
        let listPhoto = []
        for (let i = 0; i < params.imageCount; i++) {
            listPhoto.push({
                id: Vue.faker().random.uuid(),
                photo: `https://picsum.photos/id/${randomInt(500)}/1600`,
                love: randomInt(5),
                follow: Vue.faker().random.boolean()
            })
        }
        let result = {
            id: params.id,
            content: Vue.faker().lorem.sentences(),
            updated: Vue.faker().date.past(),
            listPhoto: listPhoto
        }
        return result
    },
    // Get more informations of the photo
    async fetchPhotoDetail() {
        let result = {
            content: Vue.faker().lorem.sentences(),
            public: Vue.faker().random.boolean(),
            location: Vue.faker().address.city(),
            sensitive: Vue.faker().random.boolean(),
        }
        console.log(123)
        return result
    }
}