// /*--+----+----+----+----+----+----+----+----+----+----+

//     ログインコンポーネント（モーダル）[stæˈgplæˈd]
//            2022.7.25 Tatsu_hira
//       Lesson→Loginに3か所置換
//     ※最終的にはAmazonのように吹き出し型のモーダルにしたい！！！

// ----+----+----+----+----+----+----+----+----+----+---*/
// import React from "react";
// import "./SampleCode.scss";

// /*

// // クラスコンポーネントから関数コンポーネントへの変換を画策中。
// const LoginModal = () => {
//   const [count, setcount] = React.usestate(0);

// */

// class SignIn extends React.Component {    // ※コンポーネント名(LoginModal)は大文字で開始させること！！！
//   constructor(props) {
//     super(props);
//     this.state = { isModalOpen: false };
//   }

//   handleClickLesson() {
//     this.setState({ isModalOpen: true }); // setStateメソッドを使用してisModalOpenプロパティの値をtrueに変更する。
//   }

//   handleClickClose() {
//     this.setState({ isModalOpen: false }); // setStateメソッドを使用してisModalOpenプロパティの値をfalseに変更する。
//   }

//   render() {    // renderライフサイクルメソッド
//     let modal;
//     if (this.state.isModalOpen) {
//       /* ---modalはクリックされた時にreturnステートメントに挿入する-------------------*/
//       modal = (
//         <div className="modalBackground">  {/* 背景をグレーアウトする処理 */}
//           <div className="modal-inner">  {/* 以下モーダルを形成する処理 */}
//             <div className="modal-header"></div>
//             <div className="modal-introduction">
//             <h2 className="Loginaaa"><center>ログイン</center></h2>
//             <center><input className="mailAndpass" placeholder="メールアドレス or ログインID" /></center>
//             <center><input className="loginPass" placeholder="パスワード" /></center>
//             </div>
//             <button className="modal-tx-btn" onClick={() => this.handleClickClose()}>ログイン</button>
//             <h5 className="forgetPussText"><center>パスワードを忘れてしまった場合は <u>こちら</u></center></h5>
//             <h5 className="Pravicy">クサカリックスの規約とプライバシー規約に同意いただける場合は <u>ログイン</u> して下さい。</h5>
//             <h5 className="piyopiyo"><center>アカウントをお持ちでない場合は <u>登録</u></center></h5>
//           </div>
//         </div>
//       );
//       /* ----------------------------------------------------------------------*/
//     }

//     return (      // returnステートメント
//       <>
//         <div onClick={()=>{this.handleClickLesson();}}>
//           <p className="loginText">ログイン</p>
//         </div>
//         {modal}
//       </>
//     );
//   }
// }

// export default SampleCode;    // ※コンポーネント名(LoginModal)は大文字で開始させること！！！
