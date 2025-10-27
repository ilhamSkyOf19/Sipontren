import z from "zod";

export class AlumniValidation {

    // CREATE
    static CREATE = z.object({
        name: z.string({
            error: (val) => val.input === undefined ? 'Nama harus diisi' : 'Nama harus berupa string'
        }),

        angkatan: z.string({
            error: (val) => val.input === undefined ? 'Angkatan harus diisi' : 'Angkatan harus berupa string'
        }),

        description: z.string({
            error: (val) => val.input === undefined ? 'Deskripsi harus diisi' : 'Deskripsi harus berupa string'
        }),

        img_alumni: z.refine((files) => files?.length > 0, {
            message: 'Gambar alumni harus diisi'
        }),
    }).strict();


    // UPDATE
    static UPDATE = z.object({
        name: z.string({
            error: (val) => val.input === undefined ? 'Nama harus diisi' : 'Nama harus berupa string'
        })
            .min(3, { message: 'Nama minimal 3 karakter' })
            .optional(),

        angkatan: z.string({
            error: (val) => val.input === undefined ? 'Angkatan harus diisi' : 'Angkatan harus berupa string'
        }).optional(),

        description: z.string({
            error: (val) => val.input === undefined ? 'Deskripsi harus diisi' : 'Deskripsi harus berupa string'
        }).optional(),

        img_alumni: z.refine((files) => files?.length > 0, {
            message: 'Gambar alumni harus diisi'
        }).optional(),
    }).strict();
}
