<template>
  <div class="register">
      <h1>{{msg}}</h1>
	  <div>
		  <input type="email" placeholder="Email ID" v-model="email" name="email"/>
		  <br/>
		  <input type="password" placeholder="Password" v-model="password" name="password"/>
		  <br/>
		  <button @click="register">Register</button>
	  </div>
  </div>
</template>
<script>
import AuthServices from '@/services/AuthServices'
export default {
  name: 'Register',
  data () {
    return {
	  msg: 'Register App',
	  email:'',
	  password:''
    }
  },
  methods:{
	  async register(){
		  const response = await AuthServices.register({
			  email:this.email,
			  password:this.password
		  })
		  console.log(response.data)
	  }
  }
}
</script>
