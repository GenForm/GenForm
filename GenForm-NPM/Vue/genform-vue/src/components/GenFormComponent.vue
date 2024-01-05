<template>
  <div ref= "formRef"/>
</template>

<script  setup lang="ts">
import { onMounted, ref, defineProps } from "vue"
import GenForm from '@genform/core'

const props = defineProps<{
  elems: Array<any>;
  params: Object;
}>();

const formRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const generatedForm = GenForm.toForm(document, { 
    elems: props.elems, 
    params: props.params,
  });

  if (formRef.value instanceof HTMLElement) {
    formRef.value.innerHTML = '';
    formRef.value.appendChild(generatedForm);
  }
});

</script>
