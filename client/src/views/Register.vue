<template>
  <div class="container">
    <div class="register">
      <h1 class="mb-5">Register</h1>
      <input v-model="name" class="mb-5" type="text" name="name" placeholder="Enter your name" />
      <input v-model="email" class="mb-5" type="email" name="email" placeholder="Enter your email" />
      <input v-model="password" class="mb-5" type="password" name="password" placeholder="Password" />
      <button @click="register" class="btn btn-primary">Register</button>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from "@/services/AuthenticationServices";
export default {
  components: {},
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationServices.register({
        name: this.name,
        email: this.email,
        password: this.password
      });

      console.log(response.data);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  font-size: 1.6rem;
  padding: 1rem 3rem;
}
</style>
