<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat class="black" dark>
          <v-toolbar-title class="white--text">Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field type="email" name="email" label="Email" v-model="email"></v-text-field>
          <v-text-field type="password" name="password" label="Password" v-model="password"></v-text-field>
          <div class="error-msg" v-html="error"></div>
          <br/>
          <v-btn @click="login" class="white--text black">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthService from '@/services/AuthService'
export default {
  //name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error:null
    }
  },
  methods: {
    async login () {
      try{
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data);
      }catch(error){
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error-msg{color:red;}
/* .error span{color:green;} */
</style>

