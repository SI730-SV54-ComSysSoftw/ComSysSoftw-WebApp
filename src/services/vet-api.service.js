import axios from "axios";


const http = axios.create({
    baseURL:"https://comsyssoftwapp.azurewebsites.net/api/",
   /*  headers:{
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    } */
})
export class VetsApiService {
  
    getAll() {
        return http.get('Veterinary')
    };

    GetvetById(id){
        return http.get('Veterinary/'+id)
    };
    GetvetByUserId(id){
        return http.get('Veterinary/User/'+id)
    };
    createVet(body){
        return http.post('Veterinary',body)
    };

    update(id,body){
        return http.put('Veterinary/'+id,body)
    };

    delete(id){
        return http.delete("Veterinary/"+id)
    };

}