import { AxiosError } from "axios";
import { UstadService } from "../services/ustad.service";

export class UseLoaderUstad {
    // get 
    static async read() {
        try {
            // get service
            const response = await UstadService.read();

            // return
            return response

        } catch (error) {
            // error axios
            if (error instanceof AxiosError) {
                console.log(error)
                return
            }

            return {
                success: false,
                message: 'Terjadi kesalahan'
            }
        }
    }



    // detail 
    static async detail(id) {
        try {
            // get response
            const response = await UstadService.detail(id);

            // return
            return response


        } catch (error) {
            // error axios
            if (error instanceof AxiosError) {
                console.log(error)
                return
            }

            return {
                success: false,
                message: 'Terjadi kesalahan'
            }
        }
    }
}