<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-2">
        <v-toolbar flat class="black" dark>
          <v-toolbar-title class="white--text">register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field type="email" name="email" label="Email" v-model="email"></v-text-field>
            <v-text-field type="password" name="password" label="Password" v-model="password" autocomplete="new-password"></v-text-field>
            <div class="error-msg" v-html="error"></div>
            <br/>
            <v-btn @click="register" class="white--text black">Register</v-btn>
          </form>
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
    async register () {
      try{
        const response = await AuthService.register({
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

