<template>
  <div ref="formRef"></div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import GenForm from '@genform/complete'

const props = defineProps({
  elems: {
    type: Array,
    required: true
  },
  params: {
    type: Object,
    required: true
  },
  features: {
    type: Object,
    default: () => ({})
  }
})

const formRef = ref(null)

onMounted(() => {
  const generatedForm = GenForm.toForm(document, {
    elems: props.elems,
    params: props.params,
    features: props.features
  })

  if (formRef.value instanceof HTMLElement) {
    formRef.value.innerHTML = ''
    formRef.value.appendChild(generatedForm)
  }
})
</script>
