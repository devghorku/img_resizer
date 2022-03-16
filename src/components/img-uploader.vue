<template>
  <v-container>
    <v-row class="py-6">
      <v-col cols="12" md="6">

      </v-col>
      <v-col cols="12" md="6">
        <div>Resize your image for</div>
        <v-select
            solo
            :items="options"
            v-model="selected"
            @change="$emit('input',selected)"
        >
        </v-select>
        <div class="d-flex flex-wrap">
          <template v-for="(item,idx) in imgList">
            <v-checkbox :key="idx"
                        class="col-6 col-xl-4"
                        hide-details
                        dense
                        v-model="item.selected">
              <template v-slot:label>
                <div>
                  <div>{{item.name}}</div>
                  <div>{{item.width}} x {{item.height}}</div>
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