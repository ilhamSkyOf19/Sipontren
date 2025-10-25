import AXIOS from "../lib/axios";

export class StudentService {

    // create 
    static async create(req) {
        // get response 
        const response = await AXIOS.post('/student/create', req, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);


        // return 
        return response;
    }

    // read 
    static async read() {
        // get response 
        const response = await AXIOS.get('/student/read').then(res => res.data);

        // return 
        return response
    }

    // search 
    static async search(name) {
        // get response 
        const response = await AXIOS.get("/student/search", {
            params: { name }, // kirim query param
        }).then((res) => res.data);

        // return
        return response;
    }


    // detail
    static async detail(id) {
        // get response 
        const response = await AXIOS.get(`/student/detail/${id}`).then(res => res.data);
        // return 
        return response;
    }


    // update
    static async update(req, id) {
        // get response 
        const response = await AXIOS.patch(`/student/update/${id}`, req, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);

        // return 
        return response
    }

    // delete

    static async delete(id) {
        // get response 
        const response = await AXIOS.delete(`/student/delete/${id}`).then(res => res.data);

        // return 
        return response
    }



}