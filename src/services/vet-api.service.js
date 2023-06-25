import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:5156/api/",
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