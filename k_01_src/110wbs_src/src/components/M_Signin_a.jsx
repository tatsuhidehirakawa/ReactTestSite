import React from "react";
import "./M_Signin_a.scss";

// const MSignina = () => {
//   const [count, setcount] = React.usestate(0);

class M_Signin_a extends React.Component {
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

  render() {   // renderライフサイクルメソッド
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        // <div className="modalBack・ground">   {/* 背景をグレーアウトする処理 */}
          <div className="modal_inner">
            <h2 className="notes"><center>Welcome to the "STGprd_devpkg"!</center></h2>
            <input
              className="mailAndpass"
              // placeholder="Please input your id or email."
              value="testing-01"
            />
            <input
              className="loginPass"
              // placeholder="Please input your password."
              value="********"
            />
            <button className="modal-tx-btn" onClick={() => this.handleClickClose()}>
              Login
            </button>
            <div className="notes">
              If forgetten password, <u>cleck</u>.\nIf you agree to the Terms of Use and Privacy Policy please `<u>login</u>` .`\n
            `If you do not have an account please `<u>register</u>` .``
            </div>
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
export default M_Signin_a;