import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/scss/app.scss'
Vue.config.productionTip = false
import JSZip from 'jszip'
import VueMasonry from './plugins/masonary-box'

Vue.use(VueMasonry);
Vue.use(JSZip)

new Vue({
  vuetify,
  render: h => h(App),
  methods:{
    downloadFile(img, filename) {
      var a = document.createElement("a");
      a.href = img;
      a.download = filename;
      a.click();
      a.remove()
    },
    crop(inputImage, aspectRatio) {
      const inputWidth = inputImage.naturalWidth;
      const inputHeight = inputImage.naturalHeight;
      const inputImageAspectRatio = inputWidth / inputHeight;
      let outputWidth = inputWidth;
      let outputHeight = inputHeight;
      if (inputImageAspectRatio > aspectRatio) {
        outputWidth = inputHeight * aspectRatio;
      } else if (inputImageAspectRatio < aspectRatio) {
        outputHeight = inputWidth / aspectRatio;
      }
      const outputX = (outputWidth - inputWidth) * 0.5;
      const outputY = (outputHeight - inputHeight) * 0.5;
      const outputImage = document.createElement('canvas');
      outputImage.width = outputWidth;
      outputImage.height = outputHeight;
      const ctx = outputImage.getContext('2d');
      ctx.drawImage(inputImage, outputX, outputY);
      return outputImage.toDataURL("image/png", 1)
    },
  }
}).$mount('#app')
