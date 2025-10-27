import AXIOS from "../lib/axios";

export class PamfletService {
    // create
    static async create(req) {
        // get response 
        const response = await AXIOS.post('/pamflet/create', req, {
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
        const response = await AXIOS.get('/pamflet/read').then(res => res.data);

        // return 
        return response
    }


    // detail 
    static async detail(id) {
        // get response 
        const response = await AXIOS.get(`/pamflet/detail/${id}`).then(res => res.data);

        // return 
        return response
    }


    // update 
    static async update(req, id) {
        // get response 
        const response = await AXIOS.patch(`/pamflet/update/${id}`, req, {
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
        const response = await AXIOS.delete(`/pamflet/delete/${id}`).then(res => res.data);


        // return 
        return response
    }
}