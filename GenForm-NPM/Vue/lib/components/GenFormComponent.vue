<template>
  <div ref="formRef"></div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import GenForm from '@genform/complete'

const props = defineProps({
  isFromFile: {
    type: Boolean,
    default: false
  },
  file: {
    type: Object,
    validator: (value, props) => {
      return props.isFromFile ? value !== undefined : true
    }
  },
  elems: {
    type: Array,
    validator: (value, props) => {
      return props.isFromFile ? true : value !== undefined
    }
  },
  params: {
    type: Object,
    validator: (value, props) => {
      return props.isFromFile ? true : value !== undefined
    }
  },
  features: {
    type: Object,
    default: () => ({})
  }
})

const formRef = ref(null)

onMounted(() => {
  const generatedForm = GenForm.toForm(
    document,
    props.isFromFile
      ? props.file
      : {
          elems: props.elems,
          params: props.params,
          features: props.features
        }
  )

  if (formRef.value instanceof HTMLElement) {
    formRef.value.innerHTML = ''
    formRef.value.appendChild(generatedForm)
  }
})
</script>
