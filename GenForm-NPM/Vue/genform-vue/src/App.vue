<template>
  <div id="app">
    <GenFormComponent :elems="customElems" :params="customParams" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import GenFormComponent from './components/GenFormComponent.vue';

export default {
  name: 'App',
  components: {
    GenFormComponent,
  },
  setup() {
    const customElems = ref([
      {
        type: 'text',
        name: 'name',
        placeholder: 'Name'
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Email'
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Password'
      },
      {
        type: 'submit',
        value: 'Submit'
      },
      {
        type: 'reset',
        value: 'Reset'
      }
    ]);

    const customParams = ref({
      action: '/register',
      method: 'POST',
    });

    return { customElems, customParams };
  }
};

</script>