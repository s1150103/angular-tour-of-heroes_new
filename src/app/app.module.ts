// Angular関連のモジュールとコンポーネントをインポート
import { NgModule } from '@angular/core';                    // NgModuleデコレータ
import { BrowserModule } from '@angular/platform-browser';    // ブラウザ用基本機能

import { AppRoutingModule } from './app-routing.module';      // ルーティング設定
import { AppComponent } from './app.component';              // メインコンポーネント
import { HeroesComponent } from './heroes/heroes.component'; // ヒーローコンポーネント
import { FormsModule } from '@angular/forms';               // フォーム機能（[(ngModel)]で必要）

// @NgModuleデコレータ：Angularアプリケーションの設定を定義
// NgModuleベースのアーキテクチャでは、すべてのコンポーネントがここで管理される
@NgModule({
  // declarations: このモジュールで使用するコンポーネント、ディレクティブ、パイプを登録
  declarations: [
    AppComponent,     // ルートコンポーネント（アプリのメイン画面）
    HeroesComponent   // ヒーロー管理コンポーネント（ヒーロー表示・編集機能）
  ],
  // imports: このモジュールが依存する他のモジュールを指定
  imports: [
    BrowserModule,      // ブラウザ用の基本機能（DOM操作、イベント処理など）
    FormsModule,        // フォーム機能（双方向データバインディング[(ngModel)]に必要）
    AppRoutingModule    // ルーティング機能（ページ遷移管理）
  ],
  // providers: サービスやその他の依存関係を登録（現在は空）
  providers: [],
  // bootstrap: アプリケーション起動時にロードするルートコンポーネントを指定
  bootstrap: [AppComponent]
})
export class AppModule { }