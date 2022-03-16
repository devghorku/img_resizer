<template>
  <v-container>
    <v-row class="py-6">
      <v-col cols="12" md="6">
        <v-card class="transparent" flat>
          <v-card class="br-6 d-flex sky" height="400px" outlined>
            <div class="ma-auto text-center">
              <div class="text-center ">
                <v-img :src="require('@/assets/img/drop.svg')" width="120px" class="mx-auto"></v-img>
              </div>
              <div class="my-4 f-playfair f-18 font-weight-normal txt--text">
                Drag and Drop an Image Here
              </div>
              <div class="my-2">
                <v-btn class="ma-2 white--text primary text-none font-weight-bold f-roboto f-14"
                       depressed>
                  Upload
                </v-btn>
              </div>
            </div>

          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <div class="f-Raleway f-20 font-weight-bold mb-3">Resize your image for</div>
        <v-select
            solo
            class="custom-select"
            :items="options"
            v-model="selected"
            @change="$emit('input',selected)"
        >
        </v-select>
        <div class="d-flex flex-wrap">
          <template v-for="(item,idx) in imgList">
            <v-checkbox :key="idx"
                        class="col-6 col-xl-4 mt-2"
                        hide-details
                        dense
                        v-model="item.selected"
            >
              <template v-slot:label>
                <div>
                  <div class="f-14 f-playfair font-weight-normal txt--text">{{item.name}}</div>
                  <div class="f-12 f-playfair font-weight-normal txt--text">{{item.width}} x {{item.height}}</div>
                </div>
              </template>
            </v-checkbox>
          </template>

        </div>
      </v-col>
    </v-row>
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
  },
  data() {
    return {
      selected: 'instagram',
      options: [
        {text: 'Instagram', value: 'instagram'},
        {text: 'Facebook', value: 'facebook'},
        {text: 'Tiktok', value: 'tiktok'},
        {text: 'Custom', value: 'custom'},
      ]
    }
  }
}
</script>

<style scoped>

</style>