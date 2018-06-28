# クリックジャッキングテスト

クリックジャッキングおよびその対策方法をテストするために、インラインフレームに任意のWebサイトを表示するテストページと、X-Frame-Optionsの動作を検証するための Node.js Webアプリを作成しました。

[クリックジャッキングのテスト用ページを開く](https://tdc-yamada-ya.github.io/clickjacking-test/)

* [Target URL] の入力欄にクリックジャッキング脆弱性の有無を確かめたいWebサイトのURL (https:// のみ) を入力して Enter を押してください
    * このリポジトリをクローンして docs/index.html を開くことで http:// のURLも確認することができます
* 縞模様のカバーの裏側に対象のWebサイトが表示されます
* 縞模様のカバーをクリックして、裏側のWebサイトが反応する場合クリックジャッキング脆弱性が存在します
    * もし縞模様のカバーが半透明ではなく完全に塗りつぶされている場合、ユーザは気付かずに商品を購入させられたり、勝手に情報を消させられる可能性があります


# クリックジャッキングの対策

ほとんどのサイトにおいて `X-Frame-Options: SAMEORIGIN` を設定することで解決できます。
これは iframe を埋め込むという要件の多くが同一オリジン内で完結するためです。

`X-Frame-Options: SAMEORIGIN` を設定するとオリジン（スキーム、ドメイン、ポート番号）が完全一致する場合に限り、フレーム内へのドキュメントの表示を許可します。
なおオリジンの比較は top-level browsing context に対して行われます。
top-level browsing context は最も外側のページとして [RFC7034](https://tools.ietf.org/html/rfc7034) に記載されています。
これはフレームを入れ子にした場合を考慮しています。

X-Frame-Optionsを設定する方法は以下のURLに記載されています。

[https://developer.mozilla.org/ja/docs/Web/HTTP/X-Frame-Options](https://developer.mozilla.org/ja/docs/Web/HTTP/X-Frame-Options)

`X-Frame-Options: ALLOW-FROM http://example.com` を指定することで特定のドメインに対してフレーム埋め込みを許可することができます。
しかしながら Mozilla Developer Netowork によると ALLOW-FROM は Google Chrome で非対応であり、
実際に Google Chrome (Mac) にてテストしたところ解釈できないヘッダとして無視されました。

X-Frame-Optionsは古いブラウザで未サポートであったり、細かい部分でブラウザ間の実装の違いがあるため、
実際に導入する際は開発中のWebサイトがサポートを予定しているWebブラウザを使用した動作検証が必要です。

X-Frame-Options以外のの対策手法についてはOWASPのクリックジャッキングチートシート（下記URLは日本語訳）に記載されています。

[https://jpcertcc.github.io/OWASPdocuments/CheatSheets/ClickjackingDefense.html](https://jpcertcc.github.io/OWASPdocuments/CheatSheets/ClickjackingDefense.html)
