
# Angular Tour of Heroes

このプロジェクトは、AngularのTour of Heroesチュートリアルを**NgModuleベース**で実装したものです。

## プロジェクト概要

- **フレームワーク**: Angular v17
- **アーキテクチャ**: NgModuleベース（スタンドアロンコンポーネントではない）
- **目的**: Angularの基本概念とNgModuleアプローチの学習

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

## プロジェクト構造

```
src/
├── app/
│   ├── app.component.ts      # ルートコンポーネント（NgModuleベース）
│   ├── app.component.html    # テンプレート（{{title}}で補間）
│   ├── app.component.css     # スタイル
│   ├── app.module.ts         # メインモジュール（declarations, imports, bootstrap）
│   └── app-routing.module.ts # ルーティングモジュール
├── index.html                # HTMLエントリーポイント（<app-root>）
└── main.ts                   # アプリケーションブートストラップ
```

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

## 学習リソース

- [Angular公式ドキュメント](https://angular.io/)
- [Angular Tour of Heroes チュートリアル](https://angular.io/tutorial)

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

**注意**: このプロジェクトは学習目的でNgModuleアプローチを採用していますが、Angular v14以降ではスタンドアロンコンポーネントが推奨されています。
