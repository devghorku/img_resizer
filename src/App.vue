<template>
  <v-app>
    <v-main>
      <img-uploader v-model="selected"
                    :img-list="getList"
                    @download="download"
                    @fileUploaded="fileUploaded">
      </img-uploader>
      <div v-if="img">
        <div v-if="selected==='instagram'">
          <preview-block :img="img"
                         :info="instaInfo"
                         :imgList="instagram"
                         @download="download">
          </preview-block>
        </div>
        <div v-else-if="selected==='facebook'">
          <preview-block :img="img" :info="fbInfo"
                         :imgList="faceBook"
                         @download="download">
          </preview-block>
        </div>
        <div v-else-if="selected==='tiktok'">
          <preview-block :img="img"
                         :info="tiktokInfo"
                         :imgList="tiktok"
                         @download="download">

          </preview-block>
        </div>
        <!--        <div v-else>-->
        <!--          <preview-block :img="img" :info="customInfo" :imgList="custom" @download="download">-->

        <!--          </preview-block>-->
        <!--        </div>-->
      </div>

    </v-main>
  </v-app>
</template>

<script>
import ImgUploader from "./components/img-uploader";
import PreviewBlock from "./components/preview-block";
import JSZip from 'jszip';
import {saveAs} from 'file-saver';

export default {
  name: 'App',

  components: {
    PreviewBlock,
    ImgUploader,
  },

  data: () => ({
    selected: 'instagram',
    img: null,
    dImages: [],
    instaInfo: {
      title: 'Resize Images for Instagram',
      img: require('@/assets/img/instagram.png'),
      desc: 'Our free image resizer is the perfect tool for businesses and Instagrammers alike.<br/>' +
          'We streamlined the resizing process for Instagram stories, vertical horizontal, and square posts, video thumbnails, and more - with no effort at all!'
    },
    // customInfo: {
    //   title: 'Resize Images Custom',
    //   img: null,
    //   desc: 'Our free image resizer is the perfect tool for businesses and individuals. We simplify the resizing process for various social platforms and use cases. Trim your image to a custom size in a snap without installing software and paying!'
    // },
    fbInfo: {
      title: 'Resize Images for Facebook',
      img: require('@/assets/img/fb.png'),
      desc: "We've organized all Facebook image sizes and made them easy for you to access. Create your stories, profile, posts, cover photos, and ads with our online image resizer without paying a penny!"
    },
    tiktokInfo: {
      title: 'Resize Images for TikTok',
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
        name: "Square/Ad Square",
        labels: ["Instagram Square Size", "Instagram Ad Square"],
        width: 1080,
        height: 1080,
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
        name: "Stories/Reels",
        labels: ["Instagram Stories", "Instagram Reels"],
        width: 1080,
        height: 1920,
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
        name: "Thumbnail",
        labels: ["Instagram Thumbnail"],
        width: 161,
        height: 161,
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
        labels: ["TikTok Vertical Video Ad"],
        width: 1080,
        height: 1920,
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
      {
        name: "In-feed/Video Ad",
        labels: ["TikTok In-Feed Ad Image", "TikTok Square Video Ad"],
        width: 1080,
        height: 1080,
        preview: null,
        previewImg: null,
        selected: false,
      },
    ],

    faceBook: [
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
        name: "Stories / Ads Stories",
        labels: ["Facebook Stories", "Facebook Ads Stories"],
        width: 1080,
        height: 1920,
        preview: null,
        previewImg: null,
        selected: false,
      },
      {
        name: "Marketplace / Instant Articles and Right Column",
        labels: ["Facebook Marketplace", "Facebook Instant Articles", "Facebook Right Column", "Facebook Ads Carousel Image"],
        width: 1200,
        height: 1200,
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
        name: "Feed",
        labels: ["Facebook Feed"],
        width: 1080,
        height: 1350,
        preview: null,
        previewImg: null,
        selected: false,
      },
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
        name: "Group Cover",
        labels: ["Facebook Group Cover"],
        width: 1640,
        height: 856,
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
        name: "Link / Post",
        labels: ["Facebook Link Image", "Facebook Image Post"],
        width: 1200,
        height: 630,
        preview: null,
        previewImg: null,
        selected: false,
      },

    ],
  }),
  computed: {
    getList() {
      if (this.selected === 'instagram') {
        return this.instagram
      } else if (this.selected === 'facebook') {
        return this.faceBook
      } else if (this.selected === 'tiktok') {
        return this.tiktok
      }
      return []
    },
  },
  methods: {
    fileUploaded(img) {
      this.img = img;
      this.dImages = [];
      this.instagram.forEach(item => {
        const inputImage = new Image();
        inputImage.src = img;
        inputImage.onload = () => {
          item.previewImg = this.$root.crop(inputImage, (item.width / item.height))
        }
      })
      this.faceBook.forEach(item => {
        const inputImage = new Image();
        inputImage.src = img;
        inputImage.onload = () => {
          item.previewImg = this.$root.crop(inputImage, (item.width / item.height))
        }
      })
      this.tiktok.forEach(item => {
        const inputImage = new Image();
        inputImage.src = img;
        inputImage.onload = () => {
          item.previewImg = this.$root.crop(inputImage, (item.width / item.height))
        }
      })
    },
    crop(inputImage, aspectRatio) {
      const inputWidth = inputImage.naturalWidth;
      const inputHeight = inputImage.naturalHeight;
      const inputImageAspectRatio = inputWidth / inputHeight;
      let outputWidth = inputWidth;
      let outputHeight = inputHeight;
      if (inputImageAspectRatio > aspectRatio) {
        outputWidth = inputHeight * aspectRatio;
      } else if (inputImageAspectRatio < aspectRatio) {
        outputHeight = inputWidth / aspectRatio;
      }
      const outputX = (outputWidth - inputWidth) * 0.5;
      const outputY = (outputHeight - inputHeight) * 0.5;
      const outputImage = document.createElement('canvas');
      outputImage.width = outputWidth;
      outputImage.height = outputHeight;
      const ctx = outputImage.getContext('2d');
      ctx.drawImage(inputImage, outputX, outputY);
      return outputImage.toDataURL("image/png", 1)
    },
    async download(imgList) {
      await this.makeImages(imgList)
      setTimeout(async () => {
        if (this.dImages.length > 0) {
          await this.zipDownload(this.dImages)
        }
      }, 2000)

    },
    async makeImages(imgList) {
      this.dImages = [];
      let vm = this
      imgList.forEach(item => {
        if (item.selected) {
          const image = new Image();
          image.src = item.previewImg;
          var fileName = this.convertToSlug(item.name) + '_' + item.width + '_' + item.height + '.png'
          image.onload = () => {
            var canvas = document.createElement('canvas');
            canvas.width = item.width;
            canvas.height = item.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, item.width, item.height);
            var img = canvas.toDataURL('image/png', 1);
            vm.dImages.push({fileName: fileName, img: img.replace(/^data:image\/(png|jpg);base64,/, "")})
          }
        }
      })

    },
    async zipDownload(imgs) {
      var zip = new JSZip()
      var zipImg = zip.folder("images")
      imgs.forEach(item => {
        zipImg.file(item.fileName, item.img, {base64: true, createFolders: false})
      })
      zip.generateAsync({
        type: "blob"
      }).then(function (content) {
        saveAs(content, "img_archive.zip")
      })
    },
    convertToSlug(Text) {
      return Text.toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '');
    }
  },

};
</script>
