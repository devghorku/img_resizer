<template>
  <div v-if="imgData">
    <v-card class="br-6">
      <v-card-text>
        <div>
          <v-checkbox hide-details
                      dense
                      class="align-start"
                      v-model="imgData.selected">
            <template v-slot:label>
              <div>
                <div v-for="(label,idx) in imgData.labels" :key="idx">{{ label }}</div>
                <div>{{ imgData.width }} x {{ imgData.height }}</div>
              </div>
            </template>
          </v-checkbox>
          <img id="img" :src="img" alt="" v-show="false"/>
          <canvas ref="canvas" v-show="false"></canvas>
          <v-img :src="crop" :aspect-ratio="imgData.width/imgData.height" class="br-6">
            <div>
              <v-btn @click="dialog=true" class="ma-2 float-right text-none" small>
                Adjust position
              </v-btn>
            </div>
          </v-img>
        </div>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-text>
          <cropper
              class="cropper"
              :src="img"
              :stencil-props="{
      aspectRatio: imgData.width/imgData.height
    }"
              @change="change"
          ></cropper>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="resize">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
import {Cropper} from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

export default {
  name: "img-card",
  props: {
    imgData: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      img: require('@/assets/download.jpg'),
      dialog: false,
      crop: null,
      cropVar: null,
    }
  },
  components: {
    Cropper
  },
  mounted() {
    setTimeout(() => {
      const canvas = this.$refs.canvas;
      canvas.height = canvas.width * (this.imgData.height / this.imgData.width)
      const ctx = canvas.getContext('2d');
      var image = new Image();
      image.src = document.getElementById('img').src;
      var self = this
      image.addEventListener("load", function () {
        ctx.drawImage(image, 0, 0, self.imgData.width, self.imgData.height);
        console.log(image, canvas)
      }, false);
      setTimeout(() => {
        console.log(canvas.toDataURL("image/png", 0.5))
        this.crop = canvas.toDataURL("image/jpeg", 1);
      }, 900)

    }, 1000)
  },
  methods: {
    change({coordinates, canvas}) {
      console.log(coordinates)
      this.cropVar = canvas.toDataURL("image/jpeg", 1);
    },
    resize() {
      console.log(this.crop)
      this.crop = this.cropVar;
      this.dialog = false
    }
  }
}
</script>

<style scoped>
.cropper {
  /*width: 100%;*/
  height: 600px;
}
</style>