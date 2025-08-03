import {Component} from '@angular/core';

// NgModuleベースのポイント：
// 1. standalone: true を設定しない（スタンドアロンコンポーネントではない）
// 2. このコンポーネントはapp.module.tsのdeclarationsに登録される
// 3. 依存するサービスやパイプはmodule経由でインポートされる

// 表示の仕組み：
// selector: 'app-root' → index.htmlの<app-root></app-root>と一致
// templateUrl → app.component.htmlの内容がブラウザに表示される
// styleUrls → app.component.cssのスタイルが適用される
@Component({
  selector: 'app-root',        // HTML要素として使用される名前
  templateUrl: './app.component.html',  // 表示するHTMLテンプレート
  styleUrls: ['./app.component.css'],   // 適用するCSSスタイル
})
export class AppComponent {
  title = 'Tour of Heroes';  // HTMLテンプレートで{{title}}として表示される
}