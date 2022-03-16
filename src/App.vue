<template>
  <v-app>
    <v-main>
      <img-uploader v-model="selected" :img-list="getList()"></img-uploader>
      <div v-if="selected==='instagram'">
        <preview-block :img="null" :info="instaInfo" :imgList="instagram">
        </preview-block>
      </div>
      <div v-if="selected==='facebook'">
        <preview-block :img="null" :info="fbInfo" :imgList="faceBook">
        </preview-block>
      </div>
      <div v-if="selected==='tiktok'">
        <preview-block :img="null" :info="tiktokInfo" :imgList="tiktok">

        </preview-block>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import ImgUploader from "./components/img-uploader";
import PreviewBlock from "./components/preview-block";

export default {
  name: 'App',

  components: {
    PreviewBlock,
    ImgUploader,
  },

  data: () => ({
    selected: 'instagram',
    instaInfo: {
      title: 'Resize Images for Instagram',
      img: require('@/assets/img/instagram.png'),
      desc: 'Our free image resizer is the perfect tool for businesses and Instagrammers alike.<br/>' +
          'We streamlined the resizing process for Instagram stories, vertical horizontal, and square posts, video thumbnails, and more - with no effort at all!'
    },
    fbInfo: {
      title: 'Resize Images for Facebook',
      img: require('@/assets/img/fb.png'),
      desc: "We've organized all Facebook image sizes and made them easy for you to access. Create your stories, profile, posts, cover photos, and ads with our online image resizer without paying a penny!"
    },
    tiktokInfo: {
      title: 'Resize Images for Tiktok',
      img: require('@/assets/img/tiktok.png'),
      desc: 'TikTok video dimensions should be 1080x1920 and the max file size is 287.6 MB. Make sure to choose the right format and create your eye-catching covers with our free TikTok image resizer!'
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
        name: "IGTV Cover",
        labels: ["Instagram IGTV Cover"],
        width: 420,
        height: 654,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Thumbnail",
        labels: ["Instagram Thumbnail"],
        width: 161,
        height: 161,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Stories & Reels",
        labels: ["Instagram Stories", "Instagram Reels"],
        width: 1080,
        height: 1920,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Post/Ad Landscape",
        labels: ["Instagram landscape Post", "Instagram Ad Landscape"],
        width: 1080,
        height: 566,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Square/Ad Square",
        labels: ["Instagram Square Size", "Instagram Ad Square"],
        width: 1080,
        height: 1080,
        preview: null,
        previewImg: null,
        selected: false,
      },
    ],

    tiktok: [
      {
        name: "TikTok PFP",
        labels: ["TikTok PFP"],
        width: 200,
        height: 200,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Vertical Video Ad",
        labels: ["TikTok VErtical Video Ad"],
        width: 1080,
        height: 1920,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Square/Ad Square",
        labels: ["TikTok In-Feed Ad Image", "TikTok Square Video Ad"],
        width: 1080,
        height: 1080,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Horizontal Video Ad",
        labels: ["TikTok Horizontal Video Ad"],
        width: 1920,
        height: 1080,
        preview: null,
        previewImg: null,
        selected: false,
      },
    ],

    faceBook: [
      {
        name: "Profile Picture",
        labels: ["Facebook Profile Picture"],
        width: 180,
        height: 180,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Link & Post",
        labels: ["Facebook Link Image", "Facebook Image Post"],
        width: 1200,
        height: 630,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Cover Photo",
        labels: ["Facebook Cover Photo"],
        width: 820,
        height: 312,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Feed",
        labels: ["Facebook Feed"],
        width: 1080,
        height: 1350,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Marketplace & Instant Articles and Right Column",
        labels: ["Facebook Marketplace", "Facebook Instant Articles", "Facebook Right Column", "Facebook Ads Carousel Image"],
        width: 1200,
        height: 1200,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Event",
        labels: ["Facebook Event Image"],
        width: 1920,
        height: 1005,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Group Cover",
        labels: ["Facebook Group Cover"],
        width: 1640,
        height: 856,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Highlighted",
        labels: ["Facebook Highlighted Image"],
        width: 1080,
        height: 566,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Stories & Ads Stories",
        labels: ["Facebook Stories", "Facebook Ads Stories"],
        width: 1080,
        height: 1920,
        preview: null,
        previewImg: null,
        selected: false,
      },
    ]
  }),
  methods:{
    getList(){
      if(this.selected==='instagram'){
        return this.instagram
      }else if(this.selected==='facebook'){
        return this.faceBook
      }else if(this.selected==='tiktok'){
        return this.tiktok
      }
    }
  }
};
</script>
