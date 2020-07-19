
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
    async fetchPhotoDashBoardDetail(params) {
        let result = {
            id: params.id,
            content: Vue.faker().lorem.sentences(),
            listPhoto: [],
            date: Vue.faker().date.past(),
            listPhoto: await this.fetchListPhotoInfo(params.imageCount)
        }
        return result
    },
    async fetchListPhotoInfo(imageCount) {
        let result = []
        for (let i = 0; i < imageCount; i++) {
            result.push({
                photo: `https://picsum.photos/id/${randomInt(500)}/1600`,
                love: randomInt(5),
                follow: Vue.faker().random.boolean()
            })
        }
        return result
    },
    // Get more informations of the photo
    async fetchPhotoDetail() {
        let result = {
            content: Vue.faker().lorem.sentences(),
            public: Vue.faker().random.boolean(),
            createdBy: Vue.faker().name.findName(),
            location: Vue.faker().address.city()
        }
        return result
    }
}