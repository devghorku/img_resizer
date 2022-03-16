<template>
  <v-container>
    <v-row>
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
        <div>
<!--          <template v-for="">-->
<!--            <v-checkbox label=""></v-checkbox>-->
<!--          </template>-->

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "img-uploader",
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