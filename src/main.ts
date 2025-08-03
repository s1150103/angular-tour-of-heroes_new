import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// NgModuleベースのポイント：
// 1. platformBrowserDynamic() を使用してブラウザ環境でAngularを起動
// 2. bootstrapModule() でAppModuleを指定してアプリを初期化
// 3. スタンドアロンアプローチのbootstrapApplication()は使用しない
// 4. AppModuleのbootstrap配列で指定したコンポーネントが最初にロードされる
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));