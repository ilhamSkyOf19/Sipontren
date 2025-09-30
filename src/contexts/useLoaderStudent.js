import { StudentService } from "../services/student.service";

export class UseLoaderStudent {

    // read
    static async read() {
        try {

            // get response 
            const response = await StudentService.read();

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
            const response = await StudentService.detail(id);

            // return
            return response

        } catch (error) {
            // cek console;
            console.log(error);
            return;

        }
    }
}