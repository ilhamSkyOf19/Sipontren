import AXIOS from "../lib/axios";

export class AuthService {
    // login
    static async login(req) {

        // get response 
        const response = await AXIOS.post('/auth/login', req).then(res => res.data);

        // return 
        return response
    }


    // get auth 
    static async cekAuth() {
        // get response
        const response = await AXIOS.post('/auth/cek', {}, { withCredentials: true }).then(res => res.data);

        console.log(response);

        // return
        return response
    }

    // logout 
    static async logout() {
        // get response 
        const response = await AXIOS.post('/auth/logout', {}, {
            withCredentials: true
        }).then(res => res.data);

        // return 
        return response
    }
}