import axios from "axios";


const http = axios.create({
    baseURL:"https://comsyssoftwapp.azurewebsites.net/api/",
   /*  headers:{
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    } */
})
export class PetsApiService {
  
    getAll() {
        return http.get('Pet')
    };

    getPetByUserId(id){
        return http.get('Pet/User/'+id)
    };
    create(body){
        return http.post('Pet',body)
    };

    update(id,body){
        return http.put('Pet/'+id,body)
    };

    delete(id){
        return http.delete("Pet/"+id)
    };

}