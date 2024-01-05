<template>
    <div class="home-page">
        <h1 class="title">POC GenForm</h1>

        <div class="content">
            <div class="left-section">
                <textarea
                    v-model="jsonInput"
                    class="json-input"
                    placeholder="Enter JSON data here"
                />
                <button class="submit-button" @click="jsonSubmit">
                    Submit
                </button>
            </div>

            <div class="split-line" />

            <div class="right-section">
                <GenFormComponent :elems="customElems" :params="customParams" />
            </div>
        </div>
    </div>
</template>

<script>
// Récupération du composant GenFormComponent de npm
import GenFormComponent from '@genform/vue';

export default {
    name: 'HomePage',
    components: {
        GenFormComponent,
    },
    data() {
        return {
            jsonInput: '',
            customElems: [
                {
                    type: 'text',
                    name: 'name',
                    placeholder: 'Name',
                },
                {
                    type: 'email',
                    name: 'email',
                    placeholder: 'Email',
                },
                {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Password',
                },
                {
                    type: 'submit',
                    value: 'Submit',
                },
                {
                    type: 'reset',
                    value: 'Reset',
                },
            ],
            customParams: {
                action: '/register',
                method: 'POST',
            },
        };
    },
    methods: {
        jsonSubmit() {
            console.log(this.jsonInput);
        },
    },
};
</script>

<style scoped>
@import '../assets/home-page.css';
</style>
