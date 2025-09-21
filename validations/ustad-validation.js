import z from "zod";

export class UstadValidation {

    // create
    static CREATE = z.object({
        name: z.string({
            error: (val) => val.input === undefined ? 'nama harus diisi' : 'nama harus berupa string'
        }),

        jenis_kelamin: z.enum(['laki_laki', 'perempuan'], {
            error: (val) => val.input === undefined ? 'jenis kelamin harus diisi' : 'jenis kelamin tidak sesuai'
        }),

        tempat_lahir: z.string({
            error: (val) => val.input === undefined ? 'tempat lahir harus diisi' : 'tempat lahir harus berupa string'
        }),

        tanggal_lahir: z.string({
            error: (val) => val.input === undefined ? 'tanggal lahir harus diisi' : 'tanggal lahir harus berupa string'
        }),

        alamat: z.string({
            error: (val) => val.input === undefined ? 'alamat harus diisi' : 'alamat harus berupa string'
        }),

        no_telepon: z.string({
            error: (val) => val.input === undefined ? 'nomor telepon harus diisi' : 'nomor telepon harus berupa string'
        })
            .trim()
            .regex(/^[0-9]+$/, { message: 'nomor telepon hanya boleh angka' }),

        jabatan: z.string({
            error: (val) => val.input === undefined ? 'jabatan harus diisi' : 'jabatan harus berupa string'
        }),
        ustad_img: z.refine((files) => files?.length > 0, { message: 'Img Ustad harus diisi' }),
    }).strict()

    // update
    static UPDATE = z.object({
        name: z.string({
            error: (val) => val.input === undefined ? 'nama harus diisi' : 'nama harus berupa string'
        })
            .min(3, { message: 'nama minimal 3 karakter' })
            .optional(),

        jenis_kelamin: z.enum(['laki_laki', 'perempuan'], {
            error: (val) => val.input === undefined ? 'jenis kelamin harus diisi' : 'jenis kelamin tidak sesuai'
        }).optional(),

        tempat_lahir: z.string({
            error: (val) => val.input === undefined ? 'tempat lahir harus diisi' : 'tempat lahir harus berupa string'
        }).optional(),

        tanggal_lahir: z.string({
            error: (val) => val.input === undefined ? 'tanggal lahir harus diisi' : 'tanggal lahir harus berupa string'
        })
            .optional(),

        alamat: z.string({
            error: (val) => val.input === undefined ? 'alamat harus diisi' : 'alamat harus berupa string'
        }).optional(),

        no_telepon: z.string({
            error: (val) => val.input === undefined ? 'nomor telepon harus diisi' : 'nomor telepon harus berupa string'
        })
            .regex(/^[0-9]+$/, { message: 'nomor telepon hanya boleh angka' })
            .optional(),

        jabatan: z.string({
            error: (val) => val.input === undefined ? 'jabatan harus diisi' : 'jabatan harus berupa string'
        }).optional(),
        ustad_img: z.refine((files) => files?.length > 0, { message: 'Img Ustad harus diisi' }).optional(),
    }).strict()
}
