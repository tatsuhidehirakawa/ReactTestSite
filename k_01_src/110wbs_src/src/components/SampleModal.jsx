import React from "react";
import "./SampleModal.scss";

// const SampleModal = () => {
//   const [count, setcount] = React.usestate(0);

class SampleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickOpen() {
    this.setState({ isModalOpen: true });   // setStateメソッドを使用してisModalOpenプロパティの値をtrueに変更する。
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });   // setStateメソッドを使用してisModalOpenプロパティの値をfalseに変更する。
  }

  render() {    // renderライフサイクルメソッド
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        // <div className="modalBackground">   {/* 背景をグレーアウトする処理 */}
          <div className="modal-inner">   {/* 以下モーダルを形成する処理 */}
            <div className="modal-header"></div>
            <div className="modal-introduction">
            <h2 className="Loginaaa"><center>ログイン</center></h2>
            <center><input className="mailAndpass" placeholder="メールアドレス or ログインID" /></center>
            <center><input className="loginPass" placeholder="パスワード" /></center>
            </div>
            <button className="modal-tx-btn" onClick={() => this.handleClickClose()}>ログイン</button>
            <h5 className="forgetPussText"><center>パスワードを忘れてしまった場合は <u>こちら</u></center></h5>
            <h5 className="Pravicy">当サイトの規約とプライバシー規約に同意いただける場合は <u>ログイン</u> して下さい。</h5>
            <h5 className="piyopiyo"><center>アカウントをお持ちでない場合は <u>登録</u></center></h5>
          </div>
        // </div>
      );
    }

    return (
      <>
        <div onClick={()=>{this.handleClickOpen();}}>
          <p className="App-link">View Package Summary</p>
        </div>
        {modal}
      </>
    );
  }
}
export default SampleModal;