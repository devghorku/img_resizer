<template>
  <div class="cream py-7">
    <v-container>
      <v-card flat max-width="1400px" class="mx-auto transparent">
        <div>
          <div class="d-flex align-center justify-center">
            <div>
              <v-img :src="info.img" width="40px" height="40px">
              </v-img>
            </div>
            <div class="ml-5 font-weight-bold f-24">{{info.title}}</div>
          </div>
          <div class="d-flex f-playfair desc--text f-16">
            <div v-html="info.desc" class="my-8 mx-auto text-center" style="max-width: 712px">
            </div>
          </div>

          <div class="d-flex justify-center mb-8">
            <v-btn class="ma-2 white primary--text text-none font-weight-bold f-roboto f-14"
                   depressed>
              Select All
            </v-btn>
            <v-btn class="ma-2 white--text primary text-none font-weight-bold f-roboto f-14"
                   depressed>
              Download
            </v-btn>
          </div>
          <masonry :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
                   :gutter="{default: '30px', 700: '15px'}">
            <div v-for="(item, index) in imgList" :key="index">
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
  props:{
    imgList:{
      type:Array,
      default:()=>[]
    },
    info:{
      type:Object,
      default:()=>{}
    },
    img:{
      type:String,
      default:()=>[]
    }
  },
  data() {
    return {
      gridOptions:{
        width: 208,
        padding: {
          default: 16,
        }
      },
    }
  }
}
</script>

<style scoped>

</style>