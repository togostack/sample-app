# Sample App

Next.js + Zod + shadcn/ui を使ったお問い合わせフォームのサンプルアプリケーションです。

## 技術スタック

- [Next.js](https://nextjs.org/) (App Router)
- [Zod](https://zod.dev/) (バリデーション)
- [shadcn/ui](https://ui.shadcn.com/) (UIコンポーネント)
- [Tailwind CSS](https://tailwindcss.com/) (スタイリング)
- [Bun](https://bun.sh/) (ランタイム / パッケージマネージャー)

## セットアップ

```bash
bun install
```

## 開発

```bash
bun run dev
```

http://localhost:3000 でアプリケーションが起動します。

## ビルド

```bash
bun run build
bun run start
```

## 機能

- Zod によるサーバーサイドバリデーション（名前・メール・メッセージ）
- React 19 の `useActionState` を使った Server Action 連携
- shadcn/ui コンポーネント（Button, Input, Label, Card）
- バリデーションエラーの日本語表示
