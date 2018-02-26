import Api from "@/Services/Api";

export default {
    register(credentials){
        return Api().post('register', credentials)
    }
}

// AuthServices.register({
//     email :'test@gmail.com',
//     password :'123456'
// })