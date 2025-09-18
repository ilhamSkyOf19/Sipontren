import zod, { z } from 'zod';


export class BeritaValidation {
    // create 
    static CREATE = z.object({
        title: z.string().min(3, { message: 'Judul Berita harus diisi' }),
        category: z.enum(['berita', 'artikel'], { message: 'Kategori Berita harus diisi' }),
        content: z.string().min(3, { message: 'Isi Berita harus diisi' }),
        thumbnail: z.refine((files) => files?.length > 0, { message: 'Thumbnail Berita harus diisi' }),
    })
}