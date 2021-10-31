import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '../public/assets/vendor/bootstrap/js/bootstrap.bundle.js'
// import '../public/assets/vendor/aos/aos.js'
// import '../public/assets/vendor/php-email-form/validate.js'
// import '../public/assets/vendor/swiper/swiper-bundle.min.js'
// import '../public/assets/vendor/purecounter/purecounter.js'
// import '../public/assets/vendor/isotope-layout/isotope.pkgd.min.js'
// import '../public/assets/vendor/glightbox/js/glightbox.min.js'

// import '../public/assets/js/main.js'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
