
# Angular Tour of Heroes

Angularの公式チュートリアル「Tour of Heroes」を**NgModuleベース**で実装したプロジェクトです。ヒーロー管理アプリケーションを通じてAngularの基本的な機能とNgModuleアーキテクチャを学習できます。

## 🚀 プロジェクト概要

- **フレームワーク**: Angular v17
- **アーキテクチャ**: NgModuleベース（スタンドアロンコンポーネントではない）
- **目的**: Angularの基本概念とNgModuleアプローチの学習
- **現在の実装状況**: ルーティング機能を含む完全版（ダッシュボード + ナビゲーション対応）

## 📋 プログラム説明

このアプリケーションはAngular Tour of Heroesチュートリアルに基づいたヒーロー管理システムです：

### 主要機能
1. **ダッシュボード**: トップヒーロー4名の表示とクイックアクセス
2. **ヒーローリスト表示**: 全ヒーローの一覧表示とナビゲーション
3. **ヒーロー詳細表示**: 個別URLでアクセス可能な詳細画面
4. **双方向データバインディング**: リアルタイムでのデータ更新
5. **ルーティングナビゲーション**: 画面間のスムーズな移動

### 技術的特徴
- **コンポーネント分離**: 複数コンポーネント（Dashboard, Heroes, HeroDetail）による責任分離
- **サービス層**: `HeroService`と`MessageService`による データ管理とログ機能
- **型安全性**: TypeScriptの`Hero`インターフェースによる型定義
- **ルーティング**: Angular Routerによる画面遷移とURL管理
- **テンプレート構文**: `*ngFor`、`*ngIf`、`routerLink`の活用

### アーキテクチャパターン
- **NgModuleベース**: コンポーネントをモジュールで管理
- **ルーティングモジュール**: 画面遷移ロジックの独立管理
- **依存性注入**: サービスの効率的な活用
- **Observable**: 非同期データ処理による適切な状態管理

## 🔄 ブランチ間の違い

### `5-Add-navigation` から `6-Get-data-from-a-server`（現在） への改良点

#### 🌐 HTTP通信の実装
- **HTTPクライアント**: Angular HttpClientを導入し、サーバーとの通信機能を実装
- **インメモリWebAPI**: `angular-in-memory-web-api`を使用した模擬サーバー環境の構築
- **RESTful API**: CRUD操作をHTTPリクエスト経由で実行可能に
- **ヒーロー検索機能**: リアルタイム検索コンポーネントの追加
- **メッセージサービス**: HTTPエラーハンドリングとユーザー通知機能の強化

#### 📁 新規追加ファイル
```
+ src/app/in-memory-data.service.ts      # インメモリWebAPIサービス
+ src/app/in-memory-data.service.spec.ts # テストファイル
+ src/app/hero-search/                   # ヒーロー検索コンポーネント
  ├── hero-search.component.ts           # 検索ロジック
  ├── hero-search.component.html         # 検索UI
  ├── hero-search.component.css          # 検索スタイル
  └── hero-search.component.spec.ts      # 検索テスト
+ src/app/messages/                      # メッセージ表示コンポーネント
  ├── messages.component.ts              # メッセージ管理
  ├── messages.component.html            # メッセージ表示
  ├── messages.component.css             # メッセージスタイル
  └── messages.component.spec.ts         # メッセージテスト
```

#### 🔧 主要な改良・修正
1. **HeroService改良**: HTTP通信ベースの完全なCRUD操作（作成・読取・更新・削除）
2. **エラーハンドリング**: HTTPエラーの適切な処理とユーザーフィードバック
3. **ヒーロー追加機能**: 新しいヒーローを動的に追加可能
4. **ヒーロー削除機能**: 不要なヒーローの削除機能
5. **ヒーロー更新機能**: 既存ヒーロー情報の更新とサーバー同期
6. **検索機能**: 名前による部分一致検索とオートコンプリート

#### 🔄 実装の進化
| 機能 | `5-Add-navigation` | `6-Get-data-from-a-server`（現在） |
|------|-------------------|----------------------------------|
| データソース | 静的モックデータ | ✅ **HTTP API経由** |
| ヒーロー取得 | ローカル配列 | ✅ **HTTP GET** |
| ヒーロー更新 | ローカル変更のみ | ✅ **HTTP PUT** |
| ヒーロー追加 | ❌ なし | ✅ **HTTP POST** |
| ヒーロー削除 | ❌ なし | ✅ **HTTP DELETE** |
| 検索機能 | ❌ なし | ✅ **新規実装** |
| エラー処理 | 基本的なもの | ✅ **HTTP専用エラーハンドリング** |
| メッセージ通知 | 基本機能 | ✅ **専用コンポーネント化** |

#### 🎯 技術的改善点
- **非同期処理**: RxJSのObservableによる適切な非同期データ処理
- **HTTPインターセプター**: 統一的なHTTPエラーハンドリング
- **検索最適化**: debounceTimeによる効率的な検索クエリ処理
- **UX向上**: ローディング状態の表示と適切なフィードバック
- **データ永続化**: サーバーサイドでのデータ保持（模擬環境）

#### 🌐 HTTP API エンドポイント
```typescript
// ベースURL: api/heroes
GET    /api/heroes           // 全ヒーロー取得
GET    /api/heroes/:id       // 特定ヒーロー取得
POST   /api/heroes           // 新ヒーロー作成
PUT    /api/heroes/:id       // ヒーロー更新
DELETE /api/heroes/:id       // ヒーロー削除
GET    /api/heroes/?name=:term // 名前検索
```

### `4-Add-service` から `5-Add-navigation` への改良点

#### 🚀 新機能の追加
- **ルーティング機能**: Angular Routerによるページ遷移機能の実装
- **ダッシュボード画面**: トップヒーロー表示用の新しい画面を追加
- **ナビゲーション**: 画面間の直感的な移動を可能にするメニュー
- **サービス層の有効化**: コメントアウトされていたサービス機能を完全復活

#### 📁 新規追加ファイル
```
+ src/app/app-routing.module.ts         # ルーティング設定モジュール
+ src/app/dashboard/                    # ダッシュボードコンポーネント
  ├── dashboard.component.ts            # ダッシュボードロジック
  ├── dashboard.component.html          # ダッシュボード表示テンプレート
  ├── dashboard.component.css           # ダッシュボード専用スタイル
  └── dashboard.component.spec.ts       # ダッシュボードテスト
```

#### 🔧 主要な改良・修正
1. **HeroService改良**: `getHero(id)`メソッドを追加し、個別ヒーロー取得機能を実装
2. **コンポーネント間ナビゲーション**: ルーター経由でのページ遷移を実現
3. **ユーザビリティ向上**: 直感的なナビゲーションメニューの追加
4. **アーキテクチャ強化**: ルーティングモジュールによる画面管理の体系化

#### 🔄 実装の進化
| 機能 | `4-Add-service` | `5-Add-navigation`（現在） |
|------|----------------|--------------------------|
| ヒーローリスト | ✅ 実装済み | ✅ 継続 + ナビゲーション |
| ヒーロー詳細 | ✅ 実装済み | ✅ 改良（個別URL対応） |
| サービス層 | ✅ 基本機能 | ✅ 拡張（getHero追加） |
| ダッシュボード | ❌ なし | ✅ **新規追加** |
| ルーティング | ❌ なし | ✅ **新規実装** |
| ナビゲーション | ❌ なし | ✅ **新規実装** |

#### 🎯 技術的改善点
- **URL駆動**: 各画面に専用URLを割り当て（`/dashboard`, `/heroes`, `/detail/:id`）
- **コード分割**: ルーティング設定を独立モジュール化
- **UX向上**: 直感的なナビゲーションによる操作性向上
- **保守性向上**: 画面管理の体系化により今後の拡張が容易に

#### 🔗 ルーティング構成
```typescript
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // デフォルトはダッシュボード
  { path: 'dashboard', component: DashboardComponent },       // ダッシュボード画面
  { path: 'detail/:id', component: HeroDetailComponent },     // ヒーロー詳細（ID指定）
  { path: 'heroes', component: HeroesComponent }              // ヒーローリスト画面
];
```

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
│   ├── mock-heroes.ts           # モックデータ（開発用ヒーローリスト）
│   ├── heroes/                  # ヒーローリストコンポーネント
│   │   ├── heroes.component.ts  # ヒーローリスト表示・選択ロジック
│   │   ├── heroes.component.html # ヒーローリスト表示テンプレート
│   │   ├── heroes.component.css  # ヒーローリスト用スタイル
│   │   └── heroes.component.spec.ts # テストファイル
│   └── hero-detail/             # ヒーロー詳細コンポーネント
│       ├── hero-detail.component.ts  # ヒーロー詳細表示・編集ロジック
│       ├── hero-detail.component.html # ヒーロー詳細表示テンプレート
│       ├── hero-detail.component.css  # ヒーロー詳細用スタイル
│       └── hero-detail.component.spec.ts # テストファイル
├── index.html                   # HTMLエントリーポイント（<app-root>）
└── main.ts                      # アプリケーションブートストラップ
```

### 🎯 実装済み機能

- **ヒーローリスト表示**: `*ngFor`による複数ヒーローの一覧表示
- **ヒーロー選択機能**: クリックイベントによる選択状態管理
- **ヒーロー詳細表示**: 独立したコンポーネントによる詳細情報表示
- **ヒーロー名編集**: `[(ngModel)]`による双方向データバインディング
- **条件付き表示**: `*ngIf`による動的コンテンツ表示
- **コンポーネント間通信**: `@Input()`を使用した親子コンポーネント通信
- **TypeScript型定義**: `Hero`インターフェースによる型安全性
- **モックデータ管理**: `mock-heroes.ts`による開発用データ提供

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
