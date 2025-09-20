import zod, { z } from 'zod';


export class BeritaValidation {
    // create 
    static CREATE = z.object({
        title: z.string().min(3, { message: 'Judul Berita harus diisi' }),
        category: z.enum(['berita', 'artikel'], { message: 'Kategori Berita harus diisi' }),
        content: z.string().min(3, { message: 'Isi Berita harus diisi' }),
        news: z.refine((files) => files?.length > 0, { message: 'Img Berita harus diisi' }),
    })


    // update
    static UPDATE = z.object({
        title: z.string().min(3, { message: 'Judul Berita harus diisi' }).optional(),
        category: z.enum(['berita', 'artikel'], { message: 'Kategori Berita harus diisi' }).optional(),
        content: z.string().min(3, { message: 'Isi Berita harus diisi' }).optional(),
        news: z.refine((files) => files?.length > 0, { message: 'Img Berita harus diisi' }).optional(),
    })
}