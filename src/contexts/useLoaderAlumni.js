import { AxiosError } from "axios";
import { AlumniService } from "../services/alumni.service";

export class UseLoaderAlumni {
    // get all
    static async read() {
        try {
            // panggil service
            const response = await AlumniService.read();

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
            const response = await AlumniService.detail(id);

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
