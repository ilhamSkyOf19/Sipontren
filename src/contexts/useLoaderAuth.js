import { AxiosError } from "axios";
import { AuthService } from "../services/auth.service";
import { redirect } from "react-router-dom";


export class UseLoaderAuth {
    // cek 
    static async cek() {
        try {




            // get service
            const response = await AuthService.cekAuth();


            // cek response 
            console.log(response);

            // return
            return response


        } catch (error) {
            // error axios
            if (error instanceof AxiosError) {
                console.log(error)
                return redirect('/login');
            }

            return {
                success: false,
                message: 'Terjadi kesalahan'
            }

        }
    }
}