<script>
import { ref, onMounted } from 'vue';
import api from '../api.js';

export default {
  setup() {
    const usuarios = ref([]);

    onMounted(async () => { //uma função que ocorre no carregamento da tela, nela estou fazendo uma requisição pro back na rota /users
      const response = await api.get('/users');
      usuarios = response.data;
      console.log(usuarios);
    });

    return { usuarios };
  },
};
</script>

<template>
  <div>
    <h1>Usuario</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">{{ usuario.nome }}</li>
    </ul>
  </div>
</template>