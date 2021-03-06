# RedmineTicketCopy

## 概要

Redmineのチケット詳細ページにチケット番号とチケット名をクリップボードにコピーするボタンを追加するChrome拡張機能です。
`#XXXX チケット名`のようにコピーされます。

## 対応

個人用に作成しているため以下のバージョンでしか動作確認しておりません。
それ以外のバージョンでの動作は保証しておりませんの予めご了承ください。

`Redmine 3.4.2.stable` ※テーマ適用なし

## 使い方

個人用として使用しているため、今のところ公開の予定はありません。
以下の手順でChromeに直接読み込んで使用してください。

1. リポジトリクローン
+ `manifest.json`の`matches`をRedmineのURLに変更する
+ `chrome://extensions`を開く
+ `パッケージ化されていない拡張機能を読み込む`を選択し、クローンしたディレクトリを指定
+ Redmineのチケット詳細ページにアクセスし、ボタンを表示されている事を確認。クリックするとチケット番号とチケット名がコピーされる事を確認する。
