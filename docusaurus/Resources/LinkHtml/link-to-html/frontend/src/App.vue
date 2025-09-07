<template>
  <div id="app">
    <h1>Weblink to HTML</h1>
    <input v-model="url" placeholder="Enter URL" />
    <button @click="fetchHtml">Fetch HTML</button>
    <div v-if="htmlContent">
      <button @click="copyHtml">Copy HTML</button>
      <pre>{{ htmlContent }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const url = ref('');
const htmlContent = ref('');

const fetchHtml = async () => {
  if (!url.value) {
    alert('Please enter a URL');
    return;
  }

  try {
    const response = await axios.get('http://localhost:3000/api/fetch-html', {
      params: { url: url.value },
    });
    htmlContent.value = response.data;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    htmlContent.value = 'Error fetching HTML. See console for details.';
  }
};

const copyHtml = async () => {
  try {
    await navigator.clipboard.writeText(htmlContent.value);
    alert('HTML copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy HTML:', err);
    alert('Failed to copy HTML. Please try again or copy manually.');
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 10px;
  width: 300px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  margin-top: 10px; /* Added margin for the new button */
}

pre {
  text-align: left;
  background-color: #f5f5f5;
  padding: 20px;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 10px; /* Added margin for spacing */
}
</style>
