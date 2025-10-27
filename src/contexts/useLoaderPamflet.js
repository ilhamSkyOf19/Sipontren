import { AxiosError } from "axios";
import { PamfletService } from "../services/pamflet.service";
export class UseLoaderPamflet {
    // get all
    static async read() {
        try {
            // panggil service
            const response = await PamfletService.read();

            // return hasil sukses
            return response;

        } catch (error) {
            // jika error axios
            if (error instanceof AxiosError) {
                console.log(error);
                return;
            }

            // error umum
            return {
                success: false,
                message: "Terjadi kesalahan",
            };
        }
    }

    // get detail by id
    static async detail(id) {
        try {
            // panggil service
            const response = await PamfletService.detail(id);

            // return hasil sukses
            return response;

        } catch (error) {
            // jika error axios
            if (error instanceof AxiosError) {
                console.log(error);
                return;
            }

            // error umum
            return {
                success: false,
                message: "Terjadi kesalahan",
            };
        }
    }
}
