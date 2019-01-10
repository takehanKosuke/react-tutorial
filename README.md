#実装手順
- コンポーネントはboard・square・gameの３種類
- squareコンポーネントに数字を表示
- squareコンポーネントのボタンにアラートを設置
- constructerをつかってstateに値を保持(stateを初期化)
- squareコンポーネントのボタンに表示するものをsquareのvalueを表示させる。
- squareコンポーネントのボタンをvalueを変更するものに修正
- boardコンポーネントにsquareコンポーネントの状態を保持するstateを作成
- それに伴ってSquareへのvalueの引数も変更
- squareコンポーネントのボタンのvalueの値の渡し方も修正
- boardコンポーネントにhandleClick関数を定義してそこでsquareコンポーネントの状態を変更
- squareコンポーネントはstateを保持する必要がなくなったので関数に書き換えることができます。
- 順番を交代していく
- propsにisNextをboolneで定義
- handleClick関数にisNextの状態によって代入する値を変化させ、最後にisNextの値を書き換える
- 次は誰の番なのかを表示させる。
- 勝者を宣言する。boardコンポーネント内でcalculateWinner(squares)を呼び出し次の版が誰かのところに条件式をかき勝敗が決まっている場合は「Winner: [X/O]」と表示させられるように修正し、そうでなければつぎのプレイヤーを指示する
- 勝者が確定している場合またはすでに埋まっているマスがタップされた場合は状態を変化させないようにする

##応用
- boardコンポーネントでhistory配列を作成しhandleClickでsuquaresを保存するように修正しましょう。
- gameコンポーネントにstateでhistoryをもたせる
-
-
-
-
-
