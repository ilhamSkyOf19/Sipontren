import z from "zod";


export class StudentValidation {

    // create 
    static CREATE = z.object({
        jenis_sekolah: z.enum(['sd', 'sma', 'smk'], 'Pilih jenis sekolah'),


        nisn: z
            .string()
            .min(10, "NISN minimal 10 digit")
            .regex(/^\d+$/, "NISN hanya boleh angka")
            .max(10, "NISN maksimal 10 digit"),

        nik: z
            .string()
            .regex(/^\d+$/, "NIK hanya boleh angka")
            .length(16, "NIK harus 16 digit"),

        nama_lengkap: z
            .string()
            .min(1, "Nama minimal 1 karakter")
            .regex(/^[a-zA-Z\s]+$/, "Nama hanya boleh huruf dan spasi"),

        usia: z
            .string()
            .min(1, "Usia wajib diisi")
            .regex(/^\d+$/, "Usia hanya boleh angka"),

        jenis_kelamin: z.enum(["laki-laki", "perempuan"], 'Pilih jenis kelamin'),

        email: z.email("Format email tidak valid"),

        tempat_lahir: z
            .string()
            .min(1, "Tempat lahir wajib diisi")
            .regex(/^[a-zA-Z\s]+$/, "Tempat lahir hanya boleh huruf"),

        tanggal_lahir: z.string().min(1, "Tanggal lahir wajib diisi"),

        alamat: z.string().min(5, "Alamat minimal 5 karakter"),

        anak_ke: z
            .string()
            .regex(/^\d+$/, "Anak ke hanya boleh angka"),

        jumlah_saudara: z
            .string()
            .regex(/^\d+$/, "Jumlah saudara hanya boleh angka"),

        no_hp: z
            .string()
            .min(10, "Nomor HP minimal 10 digit")
            .regex(/^\d+$/, "Nomor HP hanya boleh angka")
            .max(15, "Nomor HP maksimal 15 digit"),

        asal_sekolah: z.string().min(2, "Asal sekolah wajib diisi"),

        alamat_sekolah_asal: z.string().min(5, "Alamat sekolah wajib diisi"),

        nama_lengkap_ayah: z
            .string()
            .min(1, "Nama ayah minimal 1 karakter")
            .regex(/^[a-zA-Z\s]+$/, "Nama ayah hanya boleh huruf"),

        nama_lengkap_ibu: z
            .string()
            .min(1, "Nama ibu minimal 1 karakter")
            .regex(/^[a-zA-Z\s]+$/, "Nama ibu hanya boleh huruf"),

        nama_lengkap_wali: z
            .string()
            .min(1, "Nama wali minimal 1 karakter")
            .regex(/^[a-zA-Z\s]+$/, "Nama wali hanya boleh huruf"),

        foto_formal: z
            .any()
            .refine((files) => files?.length > 0, "Foto formal wajib diupload"),

        fc_akta_kelahiran: z
            .any()
            .refine((files) => files?.length > 0, "FC Akta wajib diupload"),

        foto_kk: z
            .any()
            .refine((files) => files?.length > 0, "Foto KK wajib diupload"),

        fc_ktp: z
            .any()
            .refine((files) => files?.length > 0, "FC KTP wajib diupload"),

        fc_kip_kis: z
            .any()
            .refine((files) => files?.length > 0, "FC KIP/KIS wajib diupload"),


    }).strict();
}