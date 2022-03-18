<template>
  <v-container>
    <v-card max-width="1080px" class="mx-auto" flat>
      <v-row class="py-6">
        <v-col cols="12" md="6">
          <v-card class="br-20 d-flex sky" flat   height="340px">
            <v-card  class="ma-auto transparent d-flex"
                     height="340px"
                     width="100%"
                     v-if="progress>0">
              <div class="ma-auto text-center">
                <v-progress-circular
                    :rotate="-90"
                    :size="85"
                    :width="8"
                    :value="progress"
                    color="primary"
                >
                  {{ progress }}%
                </v-progress-circular>
                <div class="mt-7 f-playfair f-18">Uploading...</div>
              </div>

            </v-card>
            <template v-else>
              <v-card class="transparent ma-auto d-flex"
                      v-if="!file"
                      height="340px"
                      width="100%"
                      outlined
                      @click="$refs.fileUpload.click()"
                      @dragover.prevent
                      @drop="onDrop">
                <div class="ma-auto text-center">
                  <div class="text-center ">
                    <v-img :src="require('@/assets/img/drop.svg')"
                           width="80px"
                           class="mx-auto"></v-img>
                  </div>
                  <div class="my-4 f-playfair f-18 font-weight-normal txt--text">
                    Drag and Drop an Image Here
                  </div>
                  <div class="mt-5">
                    <v-btn class="ma-2 white--text primary text-none font-weight-bold f-roboto f-14"
                           depressed>
                      Upload
                    </v-btn>
                  </div>
                </div>
                <input type="file" @change="onChange" ref="fileUpload" hidden accept="image/png, image/jpeg">
              </v-card>
              <v-card v-else class="br-20 ma-auto transparent" flat
                      height="340px"
                      width="100%">
                <v-img :src="file" width="100%" max-height="340px">
                  <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                      <v-progress-circular
                          :rotate="-90"
                          :size="85"
                          :width="8"
                          indeterminate
                          color="primary"
                      >
                      </v-progress-circular>
                    </v-row>
                  </template>
                  <div>
                    <v-btn class="dlt-btn error" color="white" icon rounded @click="removeFile">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </v-img>
              </v-card>
            </template>

          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <div class="f-20 font-weight-bold mb-3">Resize your image for</div>
          <v-select
              solo
              class="custom-select"
              :items="options"
              v-model="selected"
              @change="$emit('input',selected)"
          >
          </v-select>
          <div class="d-flex flex-wrap" v-if="selected!=='custom'">
            <template v-for="(item,idx) in imgList">
              <v-checkbox :key="idx"
                          class="col-6 mt-2"
                          hide-details
                          dense
                          v-model="item.selected"
              >
                <template v-slot:label>
                  <div>
                    <div class="f-14 f-playfair font-weight-normal txt--text">
                      {{item.name}}
                    </div>
                    <div class="f-12 f-playfair font-weight-normal desc--text">
                      {{item.width}} x {{item.height}}
                    </div>
                  </div>
                </template>
              </v-checkbox>
            </template>

          </div>
          <div v-else>
            <v-row>
              <v-col md="6" cols="12">
                <v-text-field type="number"
                              min="1"
                              v-model="imgList[0].width"
                              label="Width" outlined dense hide-details
                              @keyup="customChange"
                >
                </v-text-field>
              </v-col>
              <v-col md="6" cols="12">
                <v-text-field type="number"
                              min="1"
                              v-model="imgList[0].height"
                              @keyup="customChange" hide-details
                              label="Height" outlined dense>
                </v-text-field>
              </v-col>
              <v-col md="6" cols="12">
                <v-checkbox v-model="constant" label="Lock aspect ratio"></v-checkbox>
              </v-col>
            </v-row>


          </div>
          <div class="d-flex justify-end my-8">
            <v-btn class="ma-2 primary--text text-none font-weight-bold f-roboto f-14"
                   v-if="selected!=='custom'"
                   depressed
                   color="#F5F5F5"
                   @click="selectAll"
            >
              Select All
            </v-btn>
            <v-btn class="ma-2 white--text primary text-none font-weight-bold f-roboto f-14"
                   @click="$emit('download',imgList)"
                   depressed>
              Download
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: "img-uploader",
  props: {
    imgList: {
      type: Array,
      default: () => []
    },
    custom:{
      default:false,
      type:Boolean
    }
  },
  data() {
    return {
      file:'',
      selected: 'instagram',
      progress:0,
      totalSize:0,
      constant:true,
      scale:0.5,
      options: [
        {text: 'Instagram', value: 'instagram'},
        {text: 'Facebook', value: 'facebook'},
        {text: 'TikTok', value: 'tiktok'},
        {text: 'Custom', value: 'custom'},
      ]
    }
  },
  methods:{
    selectAll(){
      this.imgList.forEach(item=>item.selected=true)
    },
    onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);

    },
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.createFile(files[0]);
    },
    customChange(){
      if(this.imgList[0].width && this.imgList[0].width && this.file){
        this.$emit('customChange')
      }
    },
    createFile(file) {
      if (!file.type.match('image.*')) {
        alert('please select image file');
        return;
      }

      if (file.size > 5000000) {
        alert('please check file size no over 5 MB.')
        return;
      }

      var reader = new FileReader();
      var vm = this;
      reader.onloadstart = function(e) {
        vm.totalSize = e.total;
      }
      reader.onprogress = function(e) {

        vm.progress=(e.loaded / this.totalSize).toFixed(2) * 100;
      }
      reader.onload = function(e) {
        vm.file = e.target.result;
        vm.progress=0;
        vm.$emit('fileUploaded', e.target.result)
      }
      reader.onloadend = function() {
        vm.progress=0;
      }
      reader.readAsDataURL(file);

    },
    removeFile() {
      this.file = '';
      this.$emit('fileUploaded', null)
    }
  }
}
</script>

<style scoped>

</style>