import AXIOS from "../lib/axios";

export class UstadService {
    // create
    static async create(req) {
        // get response 
        const response = await AXIOS.post('/ustad/create', req, {
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
        const response = await AXIOS.get('/ustad/read').then(res => res.data);

        // return 
        return response
    }


    // detail 
    static async detail(id) {
        // get response 
        const response = await AXIOS.get(`/ustad/detail/${id}`).then(res => res.data);

        // return 
        return response
    }


    // update 
    static async update(req, id) {
        // get response 
        const response = await AXIOS.patch(`/ustad/update/${id}`, req, {
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
        const response = await AXIOS.delete(`/ustad/delete/${id}`).then(res => res.data);


        // return 
        return response
    }
}