import z from "zod";

export class UstadValidation {
    // create 
    static CREATE = z.object({
        nama: z
            .string()
            .regex(/^[a-zA-Z\s]+$/, "Nama hanya boleh huruf dan spasi")
            .min(3, "Nama minimal 3 karakter"),

        jenisKelamin: z.enum(["Laki-laki", "Perempuan"], {
            required_error: "Jenis kelamin wajib dipilih",
        }),

        tempatLahir: z
            .string()
            .regex(/^[a-zA-Z\s]+$/, "Tempat lahir hanya boleh huruf")
            .min(2, "Tempat lahir minimal 2 karakter"),

        tanggalLahir: z.string().min(1, "Tanggal lahir wajib diisi"),

        alamat: z.string().min(5, "Alamat minimal 5 karakter"),

        nomorTelepon: z
            .string()
            .regex(/^\d+$/, "Nomor telepon hanya boleh angka")
            .min(10, "Nomor telepon minimal 10 digit")
            .max(15, "Nomor telepon maksimal 15 digit"),

        email: z.string().email("Format email tidak valid"),

        jabatan: z.string().min(2, "Jabatan wajib diisi"),

        img: z
            .any()
            .refine((files) => files?.length > 0, "Foto wajib diupload"),
    }).strict()
}