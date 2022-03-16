<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <template>
          <v-card
              class="mx-auto upload_card"
              max-width="600"
          >
            <div
                class="vh-100 text-center"
                align-self="center"
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.6241 35.6495C20.4873 36.8711 16.6667 41.4894 16.6667 47C16.6667 53.4433 21.8901 58.6667 28.3334 58.6667C29.4387 58.6667 30.5081 58.513 31.5213 58.2258" stroke="#B2B2BE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M54.064 35.6495C59.2008 36.8711 63.0213 41.4894 63.0213 47C63.0213 53.4433 57.798 58.6667 51.3547 58.6667C50.2494 58.6667 49.18 58.513 48.1667 58.2258" stroke="#B2B2BE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M54 35.3333C54 27.6014 47.732 21.3333 40 21.3333C32.268 21.3333 26 27.6014 26 35.3333" stroke="#B2B2BE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M31.9097 44.5279L39.9999 36.4109L48.3205 44.6667" stroke="#B2B2BE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M40 56.3334V40.5388" stroke="#B2B2BE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="1" y="1" width="78" height="78" stroke="#B2B2BE" stroke-width="2" stroke-linejoin="round" stroke-dasharray="10 10"/>
            </svg>
              <h3>Drag and Drop an Image Here</h3>
              <v-btn class="prev_btn btn2 f-Roboto f-14 font-weight-bold mx-3">Upload</v-btn>
            </div>
              <v-btn
                  color="orange"
                  text
              >
                Explore
              </v-btn>

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