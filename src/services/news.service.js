import AXIOS from "../lib/axios";

export class NewsService {

    // create 
    static async create(req) {
        // get response 
        const response = await AXIOS.post('/news/create', req, {
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
        const response = await AXIOS.get('/news/read').then(res => res.data);

        // return 
        return response
    }


    // detail
    static async detail(id) {
        // get response 
        const response = await AXIOS.get(`/news/detail/${id}`).then(res => res.data);

        // return 
        return response;
    }


    // updat e
    static async update(req, id) {
        // get response 
        const response = await AXIOS.patch(`/news/update/${id}`, req, {
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
        const response = await AXIOS.delete(`/news/delete/${id}`).then(res => res.data);

        // return 
        return response
    }



}