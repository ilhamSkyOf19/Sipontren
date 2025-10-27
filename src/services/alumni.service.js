import AXIOS from "../lib/axios";

export class AlumniService {
    // create
    static async create(req) {
        // get response 
        const response = await AXIOS.post('/alumni/create', req, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);


        // return 
        return response
    }

    // read 
    static async read() {
        // get response 
        const response = await AXIOS.get('/alumni/read').then(res => res.data);

        // return 
        return response
    }


    // detail 
    static async detail(id) {
        // get response 
        const response = await AXIOS.get(`/alumni/detail/${id}`).then(res => res.data);

        // return 
        return response
    }


    // update 
    static async update(req, id) {
        // get response 
        const response = await AXIOS.patch(`/alumni/update/${id}`, req, {
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
        const response = await AXIOS.delete(`/alumni/delete/${id}`).then(res => res.data);


        // return 
        return response
    }
}