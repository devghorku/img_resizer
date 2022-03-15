import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: { customProperties: true },
        themes: {
            light: {
                primary: '#0033FF',
                txt: '#201925',
                cream: '#FBF2ED',
                desc: '#6E6E6E',
                sky:'#FBFBFB'
            },
        },
    },
});
