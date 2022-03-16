<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <template>
          <v-card
              class="mx-auto upload_card"
              max-width="600"
          >
            <v-img
                class="white--text align-end"
                height="400px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-btn
                  color="orange"
                  text
              >
                Explore
              </v-btn>
            </v-img>

          </v-card>
        </template>
      </v-col>
      <v-col cols="12" md="6">
        <div class="RszTitle mb-3">Resize your image for</div>
        <v-select
            solo
            :items="options"
            v-model="selected"
        >
        </v-select>
        <div class="d-flex">
<!--          <template v-for="">-->
            <v-checkbox label="" class="chkbx"></v-checkbox>
          <div>
            <div class="card_title">Instagram Profile Picture</div>
            <div class="card_subtitle">320 x 320</div>
          </div>
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