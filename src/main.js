// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// without jsx
Vue.component('my-component', {
  render (createElement) {
    return createElement(
      'div',
      `Hello ${this.text}`
    );
  },
  props: {
    text: {
      required: true
    }
  }
});

// with jsx
Vue.component('my-div', {
  render() {
    return (
      <div style={{backgroundColor: "grey", color: "white", padding: "5px"}}>
        <button onClick={this.toggleShow}>Toggle Show</button>
        <br/>
        <div v-show={this.show}>
          Hello {this.$attrs.text}
        </div>
      </div>
    );
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  },
  data() {
    return {
      show: true
    }
  }
});

// jsx and functional
Vue.component('functional-jsx', {
  functional: true, // when no state or lifecycle methods
  render() {
    return (
      <span>functional jsx component</span>
    );
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
