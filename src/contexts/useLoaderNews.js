import { NewsService } from "../services/news.service"

export class UseLoaderNews {

    // read 
    static async read() {
        try {
            // get response 
            const response = await NewsService.read();

            // return 
            return response
        } catch (error) {
            // cek error
            console.log(error);
            return
        }
    }


    // detail
    static async detail(id) {
        try {
            // get response 
            const response = await NewsService.detail(id);


            return response.data;
        } catch (error) {
            // cek error
            console.log(error);
            return
        }
    }
}