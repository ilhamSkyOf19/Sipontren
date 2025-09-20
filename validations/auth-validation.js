import z from "zod";

export class AuthValidation {

    // login 
    static LOGIN = z.object({
        email: z.email({
            error: (val) => val.input === undefined ? 'email harus di isi' : 'email tidak valid'
        }),
        password: z.string({
            error: (val) => val.input === undefined ? 'password harus di isi' : 'password tidak valid'
        }).min(1, "Password minimal 6 karakter"),
    })

}