import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgModuleベースのポイント：
// 1. declarations: 自作のコンポーネント、ディレクティブ、パイプを登録
// 2. imports: 他のモジュール（Angular標準モジュールや機能モジュール）をインポート
// 3. providers: サービスやインジェクタブルな依存関係を登録
// 4. bootstrap: アプリ起動時にロードするルートコンポーネントを指定
// 5. exports: 他のモジュールで使用可能にするものを指定（AppModuleでは通常不要）
@NgModule({
  declarations: [
    AppComponent // スタンドアロンではないコンポーネントをここに登録
  ],
  imports: [
    BrowserModule,    // ブラウザで動作するために必要な基本機能
    AppRoutingModule  // ルーティング機能を提供するモジュール
  ],
  providers: [], // サービスを登録（Angular 14以降はprovidedIn推奨）
  bootstrap: [AppComponent] // アプリのエントリーポイント
})
export class AppModule { }