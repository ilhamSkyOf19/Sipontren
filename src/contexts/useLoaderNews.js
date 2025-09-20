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
        }
    }
}