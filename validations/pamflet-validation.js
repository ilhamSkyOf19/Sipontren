import z from "zod";

export class PamfletValidation {

    // CREATE
    static CREATE = z.object({
        pamflet: z
            .instanceof(FileList)
            .refine(files => files.length > 0, {
                message: 'Pamflet harus diupload',
            }),
    });

    // UPDATE
    static UPDATE = z.object({
        pamflet: z
            .instanceof(FileList)
            .refine(files => files.length > 0, {
                message: 'Pamflet wajib diupload',
            })
            .optional(),
    });
}
