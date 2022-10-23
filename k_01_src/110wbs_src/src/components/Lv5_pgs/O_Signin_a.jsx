import React from 'react';
import A_BUTTON_A from '../Lv1_atm/A_Button_a.tsx';
// import Main from './Main.jsx';
import './O_Signin_a.scss';

// const O_SIGNIN_A = () => {
//   const [count, setcount] = React.usestate(0);

class O_SIGNIN_A extends React.Component {
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
              className="signInid"
              // placeholder="Please input your id or email."
              value="test_id_01"
            />
            <input
              className="signInpass"
              // placeholder="Please input your password."
              value="********"
            />
            <div className='A_BUTTON_A_pos'>
              <A_BUTTON_A
                onClick={()=>{this.handleClickClose();}}
                children ="login"
              />
            </div>
            <div className="lower_notes">
              If you have forgotten your password, please click <u>here</u>.<br/>
              If you agree to the Terms of Use and Privacy Policy please <u>login</u> .<br/>
              If you do not have an account, please <u>register</u> .<br/>
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
export default O_SIGNIN_A;