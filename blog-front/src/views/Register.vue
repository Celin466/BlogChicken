<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import api from '../api.js';

// Configuração do formulário e validação
const { handleSubmit, resetForm } = useForm();
//esse é o padrão para fazer um form
const { value: nome, errorMessage: nomeError } = useField(
  'nome',
  yup.string().required('O nome é obrigatório')
);

const { value: email, errorMessage: emailError } = useField(
  'email',
  yup.string().email('E-mail inválido').required('O e-mail é obrigatório')
);

const { value: senha, errorMessage: senhaError } = useField(
  'senha',
  yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória')
);

const isSubmitting = ref(false);

const onSubmit = handleSubmit(async (values) => { //essa é a função de envio values estão os campos do usuario
  try {
    isSubmitting.value = true;
    // Enviar os dados para a API
    const response = await api.post('/users', values);
    alert('Usuário registrado com sucesso!');
    resetForm();
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.response?.data || error.message);
    alert('Ocorreu um erro ao registrar o usuário.');
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <div class="register-container">
    <h1>Registro de Usuário</h1>
    <form @submit.prevent="onSubmit" class="register-form">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input id="nome" v-model="nome" type="text" placeholder="Digite seu nome" />
        <span class="error">{{ nomeError }}</span>
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input id="email" v-model="email" type="email" placeholder="Digite seu e-mail" />
        <span class="error">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="senha">Senha</label>
        <input id="senha" v-model="senha" type="senha" placeholder="Digite sua senha" />
        <span class="error">{{ senhaError }}</span>
      </div>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Registrando...' : 'Registrar' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.register-form .form-group {
  margin-bottom: 15px;
}

.register-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.register-form input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-form .error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.register-form button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.register-form button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>