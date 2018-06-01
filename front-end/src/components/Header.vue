<template>
    <v-toolbar fixed class="" dark>
        <v-toolbar-title class="mr-4 white--text navbtn">
            <span @click="navigateTo({name: 'register'})">TabTracker</span>
        </v-toolbar-title>
        <!-- <v-toolbar-items>
            <v-btn flat>Browse</v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
                <v-btn flat dark to="login">Login</v-btn>
                <v-btn flat dark to="register">Sign Up</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
 methods:{
     navigateTo(route){
         this.$router.push(route)
     }
 }
}
</script>
<style scoped>
.navbtn{cursor: pointer;}
</style>

