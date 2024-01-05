import GenFormComponent from './components/GenFormComponent.vue';

export function install(app) {
  if (install.installed) return;

  install.installed = true;
  app.component('GenFormComponent', GenFormComponent);
}

const plugin = { install };

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default GenFormComponent