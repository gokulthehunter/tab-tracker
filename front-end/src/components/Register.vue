<template>
  <div class="hello">
    <h1>register</h1>
    <input type="email" name="email" placeholder="Email" v-model="email">
    <br/>
    <input type="password" name="password" placeholder="Password" v-model="password">
    <br/>
    <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService'
export default {
  //name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email val changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 1000)
  // }
  methods: {
    async register () {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data);
    }
  }
}
</script>
