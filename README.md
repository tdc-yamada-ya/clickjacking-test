# クリックジャッキングテスト

クリックジャッキングのテスト用Webサイト
[https://tdc-yamada-ya.github.io/clickjacking-test/](https://tdc-yamada-ya.github.io/clickjacking-test/)

* [Target URL] の入力欄にクリックジャッキング脆弱性の有無を確かめたいWebサイトのURL (https:// のみ) を入力して Enter を押してください
    * このリポジトリをクローンして docs/index.html を開くことで http:// のURLも確認することができます
* 縞模様のカバーの裏側に対象のWebサイトが表示されます
* 縞模様のカバーをクリックして、裏側のWebサイトが反応する場合クリックジャッキング脆弱性が存在します
    * もし縞模様のカバーが半透明ではなく完全に塗りつぶされている場合、ユーザは気付かずに商品を購入させられたり、勝手に情報を消させられる可能性があります


# クリックジャッキングの対策

ほとんどのサイトにおいて `X-Frame-Options: SAMEORIGIN` を設定することで解決できます。
これは iframe を埋め込むという要件の多くの場合が同一オリジン内で完結するためです。
X-Frame-Optionsを設定する方法は以下のURLに記載されています。

[https://developer.mozilla.org/ja/docs/Web/HTTP/X-Frame-Options](https://developer.mozilla.org/ja/docs/Web/HTTP/X-Frame-Options)



[https://jpcertcc.github.io/OWASPdocuments/CheatSheets/ClickjackingDefense.html](https://jpcertcc.github.io/OWASPdocuments/CheatSheets/ClickjackingDefense.html)
