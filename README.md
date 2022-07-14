# 簡単な説明

まず前提としてNuxt3の環境構築ができてる必要があります。
<<<<<<< HEAD
=======

https://zenn.dev/szn/articles/nuxt-3-with-docker-compose

https://zenn.dev/winteryukky/articles/87a40b60fddb96

私はこんな感じでやりました。

<br>

# 中身の説明

Vueは、HTML・CSS・TSを１つのファイルにまとめて書きます。

<br>

## app.vue

全体の枠組みが書いてある。ナビバーやヘッダーなど。

<br>

## pages

メインで表示される部分のvueが入っている。

index.vue は 適当な動作確認

next.vue は APIのGETの動作確認

register.vue は FORMの動作確認

<br>

## composables

状態管理に関するtypescriptが入っている。

現状はヘッダーの文字を動的に変えるための変数しか入っていない。

<br>

## server/api

外部と通信するためのtypescriptが入っている。

deal.ts は 適当な天気予報をするAPIを試しに通信している。

register.ts は 駐輪場登録用のAPIを入れるつもりだが、現状手が付いていない。

<br>

## その他

あんまり気にしないで良い。


>>>>>>> refs/remotes/origin/main

https://zenn.dev/szn/articles/nuxt-3-with-docker-compose

https://zenn.dev/winteryukky/articles/87a40b60fddb96

私はこんな感じでやりました。

<br>

# 中身の説明

Vueは、HTML・CSS・TSを１つのファイルにまとめて書きます。

<br>

## app.vue

全体の枠組みが書いてある。ナビバーやヘッダーなど。

<br>

## pages

メインで表示される部分のvueが入っている。

index.vue は 適当な動作確認

next.vue は APIのGETの動作確認

register.vue は FORMの動作確認

<br>

## composables

状態管理に関するtypescriptが入っている。

現状はヘッダーの文字を動的に変えるための変数しか入っていない。

<br>

## server/api

外部と通信するためのtypescriptが入っている。

deal.ts は 適当な天気予報をするAPIを試しに通信している。

register.ts は 駐輪場登録用のAPIを入れるつもりだが、現状手が付いていない。

<br>

## その他

あんまり気にしないで良い。