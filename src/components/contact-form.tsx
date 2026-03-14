"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const initialState: FormState = {
  success: false,
  errors: {},
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>お問い合わせ</CardTitle>
        <CardDescription>
          以下のフォームに入力して送信してください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">名前</Label>
            <Input id="name" name="name" placeholder="山田太郎" />
            {state.errors.name && (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="taro@example.com"
            />
            {state.errors.email && (
              <p className="text-sm text-destructive">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">メッセージ</Label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="お問い合わせ内容をご記入ください"
              className="border-input bg-background ring-ring/10 flex w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50"
            />
            {state.errors.message && (
              <p className="text-sm text-destructive">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "送信中..." : "送信"}
          </Button>

          {state.message && (
            <p
              className={`text-sm text-center ${
                state.success ? "text-green-600" : "text-destructive"
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
