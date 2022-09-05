/*--+----+----+----+----+----+----+----+----+----+----+

   新規登録コンポーネント（モーダル）
           2022.7.25 Tatsu_hira
      Lesson→Loginに3か所置換

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import "./SignUp.scss";

/*
// クラスコンポーネントから関数コンポーネントへの変換を画策中。
const NewCustomer = () => {
  const [count, setcount] = React.usestate(0);
*/

class SignUp extends React.Component {
  // ※コンポーネント名(LoginModal)は大文字で開始させること！！！
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true }); // setStateメソッドを使用してisModalOpenプロパティの値をtrueに変更する。
  }

  handleClickClose() {
    this.setState({ isModalOpen: false }); // setStateメソッドを使用してisModalOpenプロパティの値をfalseに変更する。
  }

  render() {
    // renderライフサイクルメソッド
    let modal;
    if (this.state.isModalOpen) {
      /* ---modalはクリックされた時にreturnステートメントに挿入する-------------------*/
      modal = (
        <div className="modalBackground">
          {" "}
          {/* 背景をグレーアウトする処理 */}
          <div className="signup-modal-inner">
            {" "}
            {/* 以下モーダルを形成する処理 */}
            <div className="modal-header"></div>
            <div className="modal-introduction">
              <h2 className="Loginaaa">
                <center>サインアップ</center>
              </h2>
              <center>
                <input
                  className="mailAndpass"
                  placeholder="メールアドレス or ログインID"
                />
              </center>
              <center>
                <input className="loginPass" placeholder="パスワード" />
              </center>
            </div>
            <button
              className="modal-tx-btn"
              onClick={() => this.handleClickClose()}
            >
              登録する
            </button>
            <h5 className="Pravicy">
              当サイトの規約とプライバシー規約に同意いただける場合は <u>登録</u>{" "}
              して下さい。
            </h5>
          </div>
        </div>
      );
      /* ----------------------------------------------------------------------*/
    }

    return (
      <>
        <div
          onClick={() => {
            this.handleClickLesson();
          }}
        >
          <p className="SignUpText">新規登録</p>
        </div>
        {modal}
      </>
    );
  }
}

export default SignUp;
