<template>
  <v-app>
    <v-main>
      <img-uploader></img-uploader>
      <preview-block></preview-block>
    </v-main>
  </v-app>
</template>

<script>
import ImgUploader from "./components/img-uploader";
import PreviewBlock from "./components/preview-block";

export default {
  name: 'App',

  components: {
    PreviewBlock,
    ImgUploader,
  },

  data: () => ({
    //
  }),
};
</script>
