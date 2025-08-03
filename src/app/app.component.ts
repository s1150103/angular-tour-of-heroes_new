// AngularのコアライブラリからComponentデコレータをインポート
import {Component} from '@angular/core';

// NgModuleベースのAngularコンポーネントの特徴：
// 1. standalone: true を設定しない（スタンドアロンコンポーネントではない）
// 2. このコンポーネントはapp.module.tsのdeclarationsに登録される
// 3. 依存するサービスやパイプはmodule経由でインポートされる

// アプリケーションの表示の仕組み：
// 1. index.htmlの<app-root></app-root>がエントリーポイント
// 2. main.ts → app.module.ts → AppComponent の順で読み込まれる
// 3. selector: 'app-root'でHTML要素を特定
// 4. app.component.htmlの内容が実際にブラウザに表示される
@Component({
  selector: 'app-root',                    // HTML要素として使用される名前（index.htmlと対応）
  templateUrl: './app.component.html',     // 表示するHTMLテンプレートファイル
  styleUrls: ['./app.component.css'],      // 適用するCSSスタイルファイル
})
export class AppComponent {
  // titleプロパティ：HTMLテンプレートで{{title}}として補間表示される
  // プロパティの値を変更すると、リアルタイムでブラウザ表示も更新される
  title = 'Tour of Heroes';
}