<template>
  <div class="cream">
    <v-container>
      <v-card flat max-width="1400px" class="mx-auto transparent">
        <div>
          <div class="top">
            <div class="RszIF my-4">
              <div class="pr-2">In</div>
              <div><h3>Resize Images for Instagram</h3></div>
            </div>
            <div class="subtitle my-2">
              Our free image resizer is the perfect tool for businesses and Instagrammers alike.
              We streamlined the resizing process for Instagram stories, vertical horizontal, and square posts, video
              thumbnails, and more - with no effort at all!
            </div>
            <div class="ma-6">
              <v-btn class="prev_btn mx-3 primary--text">Select All</v-btn>
              <v-btn class="prev_btn btn2 mx-3">Download</v-btn>
            </div>
          </div>
          <masonry :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
                   :gutter="{default: '30px', 700: '15px'}">
            <div v-for="(item, index) in instagram" :key="index">
              <img-card :imgData="item" class="mb-4"/>
            </div>
          </masonry>
        </div>
      </v-card>

    </v-container>
  </div>

</template>

<script>
import ImgCard from "./img-card";


export default {
  name: "preview-block",
  components: { ImgCard},
  data() {
    return {
      gridOptions:{
        width: 208,
        padding: {
          default: 16,
        }
      },
      instagram: [
        {
          name: "Profile Picture",
          labels: ["Instagram Profile Picture"],
          width: 320,
          height: 320,
          preview: null,
          previewImg: null,
          selected: false,
        },
        {
          name: "Post/Ad Portrait",
          labels: ["Instagram portrait post", "Instagram ad portrait", "Instagram post size"],
          width: 1080,
          height: 1350,
          preview: null,
          previewImg: null,
          selected: false,
        },
        {
          name: "Profile Picture",
          labels: ["Instagram Profile Picture"],
          width: 320,
          height: 320,
          preview: null,
          previewImg: null,
          selected: false,
        },
        {
          name: "Post/Ad Portrait",
          labels: ["Instagram portrait post", "Instagram ad portrait", "Instagram post size"],
          width: 1080,
          height: 1350,
          preview: null,
          previewImg: null,
          selected: false,
        },
        {
          name: "Profile Picture",
          labels: ["Instagram Profile Picture"],
          width: 320,
          height: 320,
          preview: null,
          previewImg: null,
          selected: false,
        },
        {
          name: "Post/Ad Portrait",
          labels: ["Instagram portrait post", "Instagram ad portrait", "Instagram post size"],
          width: 1080,
          height: 1350,
          preview: null,
          previewImg: null,
          selected: false,
        },
        {
          name: "Profile Picture",
          labels: ["Instagram Profile Picture"],
          width: 320,
          height: 320,
          preview: null,
          previewImg: null,
          selected: false,
        },
        {
          name: "Post/Ad Portrait",
          labels: ["Instagram portrait post", "Instagram ad portrait", "Instagram post size"],
          width: 320,
          height: 200,
          preview: null,
          previewImg: null,
          selected: false,
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>