<template>
  <div class="home-page">
    <h1 class="title">POC GenForm</h1>

    <div class="content">
      <div class="left-section">
        <textarea
          ref="jsonInput"
          class="json-input" 
          placeholder="Enter JSON data here"
        />
        <button class="submit-button">Submit</button>
      </div>

      <div class="split-line"/>

      <div class="right-section">
        <!-- To be completed once the Vue npm package is created -->
        <button>Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/home-page.css";
</style>
