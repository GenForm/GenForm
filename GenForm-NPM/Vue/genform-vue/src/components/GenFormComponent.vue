<template>
  <div ref= "formRef"/>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue"
import GenForm from '@genform/core'

export default {
  name: 'GenFormComponent',
  props: {
    elems: Array,
    params: Object,
  },
  setup(props) {
    const formRef = ref(null);

    onMounted(() => {
      const generatedForm = GenForm.toForm(document, { 
        elems: props.elems, 
        params: props.params,
      });

      if (formRef.value) {
        formRef.value.innerHTML = '';
        formRef.value.appendChild(generatedForm);
      }
    });

    return {
      formRef,
    };
  },
};
</script>
