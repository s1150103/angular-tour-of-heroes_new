// Angular関連のモジュールとコンポーネントをインポート
import { NgModule } from '@angular/core';                    // NgModuleデコレータ
import { BrowserModule } from '@angular/platform-browser';    // ブラウザ用基本機能
import { CommonModule } from '@angular/common';              // NgIf, NgFor, UpperCasePipeなど

import { AppRoutingModule } from './app-routing.module';      // ルーティング設定
import { AppComponent } from './app.component';              // メインコンポーネント
import { HeroesComponent } from './heroes/heroes.component'; // ヒーローコンポーネント
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // ヒーロー詳細コンポーネント
import { FormsModule } from '@angular/forms';
// import { MessagesComponent } from './messages/messages.component';                             // フォーム機能（[(ngModel)]で必要）

// @NgModuleデコレータ：Angularアプリケーションの設定を定義
// NgModuleベースのアーキテクチャでは、すべてのコンポーネントがここで管理される
@NgModule({
  // declarations: このモジュールで使用するコンポーネント、ディレクティブ、パイプを登録
  declarations: [
    AppComponent,        // ルートコンポーネント（アプリのメイン画面）
    HeroesComponent,     // ヒーロー管理コンポーネント（ヒーロー表示・編集機能）
    HeroDetailComponent, // MessagesComponent  // ヒーロー詳細コンポーネント（選択されたヒーローの詳細表示）
  ],
  // imports: このモジュールが依存する他のモジュールを指定
  imports: [
    BrowserModule,        // ブラウザ用の基本機能（DOM操作、イベント処理など）
    CommonModule,         // NgIf, NgFor, UpperCasePipeなどの基本ディレクティブ
    FormsModule,          // フォーム機能（双方向データバインディング[(ngModel)]に必要）
    AppRoutingModule      // ルーティング機能（ページ遷移管理）
  ],
  // providers: サービスやその他の依存関係を登録（現在は空）
  providers: [],
  // bootstrap: アプリケーション起動時にロードするルートコンポーネントを指定
  bootstrap: [AppComponent]
})
export class AppModule { }