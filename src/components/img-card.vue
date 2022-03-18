<template>
  <div v-if="imgData">
    <v-card class="br-6">
      <v-card-text>
        <div>
          <v-checkbox hide-details v-if="!single"
                      dense
                      class="align-start"
                      v-model="imgData.selected">
            <template v-slot:label>
              <div class="ct">
                <div v-for="(label,idx) in imgData.labels" :key="idx"
                     class="f-playfair f-14 font-weight-normal txt--text">{{ label }}
                </div>
                <div class="f-playfair f-12 font-weight-normal desc--text">{{ imgData.width }} x {{
                    imgData.height
                  }}
                </div>
              </div>
            </template>
          </v-checkbox>
          <div v-else>
            <div v-for="(label,idx) in imgData.labels" :key="idx"
                 class="f-playfair f-14 font-weight-normal">{{ label }}
            </div>
            <div class="f-playfair f-12 font-weight-normal desc--text">
              {{ imgData.width }} x {{ imgData.height }}
            </div>
          </div>
          <v-img :src="imgData.previewImg"
                 :aspect-ratio="imgData.width/imgData.height"
                 class="br-6 sky">
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
              </v-row>
            </template>
            <div>
              <v-btn @click="dialog=true"
                     class="ma-2 float-right text-none cream font-weight-bold"
                     small>
                Adjust
              </v-btn>
            </div>
          </v-img>
        </div>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          Adjust Position
        </v-card-title>
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
        <v-card-actions class="justify-end">
          <v-btn @click="dialog=false" color="primary"
                 class="mb-3 text-none f-roboto px-3"
                 outlined>
            Cancel
          </v-btn>
          <v-btn @click="resize" color="primary" class="mb-3 text-none f-roboto px-3">
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
    },
    img: {
      type: String,
      default: () => ''
    },
    single: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      dialog: false,
      crop: null,
      cropVar: null,
    }
  },
  components: {
    Cropper
  },
  methods: {
    change({canvas}) {
      this.cropVar = canvas.toDataURL("image/png", 1);
    },
    resize() {
      this.imgData.previewImg = this.cropVar;
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>