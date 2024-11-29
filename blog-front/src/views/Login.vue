<script>
import { ref, onMounted } from 'vue';
import api from '../api.js';

export default {
  setup() {
    const posts = ref([]);

    onMounted(async () => {
      const response = await api.get('/users');
      posts.value = response.data;
    });

    return { posts };
  },
};
</script>

<template>
  <div>
    <h1>Posts do Blog</h1>
    <ul>
      <!-- <li v-for="post in posts" :key="post.id">{{ post.title }}</li> -->
    </ul>
  </div>
</template>