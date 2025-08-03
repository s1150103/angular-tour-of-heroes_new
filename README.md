
# Angular Tour of Heroes

Angularの公式チュートリアル「Tour of Heroes」を**NgModuleベース**で実装したプロジェクトです。ヒーロー管理アプリケーションを通じてAngularの基本的な機能とNgModuleアーキテクチャを学習できます。

## 🚀 プロジェクト概要

- **フレームワーク**: Angular v17
- **アーキテクチャ**: NgModuleベース（スタンドアロンコンポーネントではない）
- **目的**: Angularの基本概念とNgModuleアプローチの学習
- **現在の実装状況**: ヒーローエディター機能を実装済み

## 技術的なポイント

### NgModuleベースの特徴
- コンポーネントに `standalone: true` を設定しない
- `app.module.ts` でコンポーネントを `declarations` に登録
- `main.ts` で `platformBrowserDynamic().bootstrapModule()` を使用
- 依存関係はモジュール経由で管理

### 表示の仕組み
1. `index.html` の `<app-root>` がエントリーポイント
2. `main.ts` → `app.module.ts` → `AppComponent` の順で読み込み
3. `AppComponent` の `selector: 'app-root'` で要素を特定
4. `app.component.html` の内容が実際にブラウザに表示される

## 開発環境

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

### 前提条件
- Node.js
- Angular CLI

### セットアップ
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
ng serve
```

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── app.component.ts         # ルートコンポーネント（NgModuleベース）
│   ├── app.component.html       # テンプレート（{{title}}で補間）
│   ├── app.component.css        # スタイル
│   ├── app.module.ts            # メインモジュール（declarations, imports, bootstrap）
│   ├── app-routing.module.ts    # ルーティングモジュール
│   ├── hero.ts                  # Heroインターフェース（型定義）
│   └── heroes/                  # ヒーローコンポーネント
│       ├── heroes.component.ts  # ヒーロー表示・編集ロジック
│       ├── heroes.component.html # ヒーロー表示テンプレート
│       ├── heroes.component.css  # ヒーロー用スタイル
│       └── heroes.component.spec.ts # テストファイル
├── index.html                   # HTMLエントリーポイント（<app-root>）
└── main.ts                      # アプリケーションブートストラップ
```

### 🎯 実装済み機能

- **ヒーローエディター**: ヒーロー名の表示と編集
- **双方向データバインディング**: `[(ngModel)]`を使用した入力フィールド
- **TypeScript型定義**: `Hero`インターフェースによる型安全性
- **コンポーネント構成**: 再利用可能なヒーローコンポーネント

## リポジトリ

- **GitHub**: https://github.com/s1150103/angular-tour-of-heroes_new.git
- **ブランチ戦略**: 機能ごとにブランチを作成（例: `0-create-new-project`）

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 🚨 トラブルシューティング

### TypeScriptインポートエラー
```typescript
// ❌ 間違い
import { Hero } from '../hero';

// ✅ 正しい（.js拡張子を使用）
import { Hero } from '../hero.js';
```

### ポート競合エラー
```bash
# 別のポートを指定して起動
ng serve --port 4201
```

## 🤝 開発フロー

1. 機能ブランチを作成: `git checkout -b feature/新機能名`
2. 変更を実装
3. 変更をコミット: `git commit -m "説明"`
4. ブランチにプッシュ: `git push origin feature/新機能名`
5. プルリクエストを作成

## 📚 学習リソース

- [Angular公式ドキュメント](https://angular.io/)
- [Angular Tour of Heroes チュートリアル](https://angular.io/tutorial)
- [Angular CLI リファレンス](https://angular.dev/tools/cli)

## 🔧 追加の利用可能なコマンド

### コード品質チェック
```bash
npm run lint    # ESLintでコードスタイルをチェック
```

### テスト実行
```bash
ng test         # ユニットテスト実行
ng e2e          # エンドツーエンドテスト実行
```

### プロダクションビルド
```bash
ng build --prod # 本番環境用最適化ビルド
```

---

**🎓 学習メモ**: このプロジェクトは学習目的でNgModuleアプローチを採用していますが、Angular v14以降ではスタンドアロンコンポーネントが推奨されています。実際のプロジェクトでは最新のベストプラクティスを採用することをお勧めします。
