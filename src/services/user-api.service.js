import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:5156/api/",
    headers:{
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    }
})
export class UsersApiService {
  
    getAll() {
        return http.get('users')
    };

    getUserById(id){
        return http.get('User/'+id)
    };
    createUser(body){
        return http.post('users',body)
    };

    update(id,body){
        return http.patch('User/'+id,body)
    };

    delete(id){
        return http.delete("users/"+id)
    };

}