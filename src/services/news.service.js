import AXIOS from "../lib/axios";

export class NewsService {

    // read 
    static async read() {
        // get response 
        const response = await AXIOS.get('/news/read').then(res => res.data);

        // return 
        return response
    }

    static async delete(id) {
        // get response 
        const response = await AXIOS.delete(`/news/delete/${id}`).then(res => res.data);

        // return 
        return response
    }
}