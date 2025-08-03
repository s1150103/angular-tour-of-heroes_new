// AngularのコアライブラリからComponentデコレータをインポート
import { Component } from '@angular/core';
// 親ディレクトリのhero.tsファイルからHeroインターフェースをインポート
// 注意: TypeScriptでは.js拡張子を指定するが、実際には.tsファイルが読み込まれる
import { Hero } from '../hero.js';

// @Componentデコレータ：このクラスがAngularコンポーネントであることを宣言
@Component({
  selector: 'app-heroes',                    // HTMLで使用するカスタムタグ名
  templateUrl: './heroes.component.html',   // テンプレートファイルのパス
  styleUrls: ['./heroes.component.css']     // スタイルファイルのパス（配列形式）
})
export class HeroesComponent {
  // heroプロパティ：Heroインターフェースに準拠したオブジェクト
  // このプロパティはテンプレートで{{hero.name}}などでアクセス可能
  hero: Hero = {
    id: 1,           // ヒーローID（数値）
    name: 'Windstorm' // ヒーロー名（文字列）
  };
}