import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "名前は必須です").max(50, "名前は50文字以内です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z
    .string()
    .min(10, "メッセージは10文字以上入力してください")
    .max(500, "メッセージは500文字以内です"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
