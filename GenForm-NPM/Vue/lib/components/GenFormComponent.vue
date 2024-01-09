<template>
    <div ref="formRef"></div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import GenForm from '@genform/core'

const props = defineProps({
    elems: Array,
    params: Object
})

const formRef = ref(null)

onMounted(() => {                
    const generatedForm = GenForm.toForm(document, {
        elems: props.elems,
        params: props.params
    })

    if (formRef.value instanceof HTMLElement) {
        formRef.value.innerHTML = ''
        formRef.value.appendChild(generatedForm)
    }
})
</script>
