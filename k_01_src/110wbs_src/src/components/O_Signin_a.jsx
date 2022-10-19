import React from 'react';
// import A_Button_a from './A_Button_a';
import './O_Signin_a.scss';

// const O_Signin_a = () => {
//   const [count, setcount] = React.usestate(0);

class O_Signin_a extends React.Component {
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
          <div className="modal_general">
            <h2 className="upper_notes"><center>Welcome to the "STGprd_devpkg" - Ver 0.3.0.0</center></h2>
            <input
              className="signIntext"
              // placeholder="Please input your id or email."
              value="test_id_01"
            />
            <input
              className="signIntext"
              // placeholder="Please input your password."
              value="********"
            />
            <button className="tx_btn" onClick={() => this.handleClickClose()}>
              Login
            </button>
            {/* <A_Button_a /> */}
            <div className="lower_notes">
              If forgetten password, <u>cleck</u>.<br/>
              If you agree to the Terms of Use and Privacy Policy please <u>login</u> .<br/>
              If you do not have an account please <u>register</u> .<br/>
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
export default O_Signin_a;