"use server";

import { contactSchema, type ContactFormData } from "@/lib/schema";

export type FormState = {
  success: boolean;
  errors: Partial<Record<keyof ContactFormData, string[]>>;
  message: string;
};

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      success: false,
      errors: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        message: fieldErrors.message,
      },
      message: "入力内容にエラーがあります",
    };
  }

  // ここで実際のデータ処理（DB保存、メール送信など）を行う
  console.log("送信データ:", result.data);

  return {
    success: true,
    errors: {},
    message: `${result.data.name}さん、お問い合わせありがとうございます！`,
  };
}
