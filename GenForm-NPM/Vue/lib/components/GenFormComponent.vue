<template>
  <div ref="formRef"></div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import GenForm from '@genform/complete'

const props = defineProps({
  file: {
    type: Boolean,
    default: false
  },
  filePath: {
    type: String,
    validator: (value, props) => {
      return props.file ? value !== undefined : true
    }
  },
  elems: {
    type: Array,
    validator: (value, props) => {
      return !props.file ? value !== undefined : true
    }
  },
  params: {
    type: Object,
    validator: (value, props) => {
      return !props.file ? value !== undefined : true
    }
  },
  features: {
    type: Object,
    default: () => ({})
  }
})

const formRef = ref(null)

onMounted(() => {
  let generatedForm
  if (props.file) {
    generatedForm = GenForm.toFormWithFile(document, props.filePath)
  } else {
    generatedForm = GenForm.toForm(document, {
      elems: props.elems,
      params: props.params,
      features: props.features
    })
  }

  if (formRef.value instanceof HTMLElement) {
    formRef.value.innerHTML = ''
    formRef.value.appendChild(generatedForm)
  }
})
</script>
