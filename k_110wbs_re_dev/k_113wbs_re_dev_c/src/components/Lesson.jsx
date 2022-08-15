import React from "react";
import "./Lesson.scss";

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false }; // 初期のstateにfalseをセット
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true }); // 開く場合のstateにtrueをセット
  }

  handleClickClose() {
    this.setState({ isModalOpen: false }); // 閉じる場合のstateにfalseをセット
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        /*　こいつらを描画しますよ！！！-----------------------*/
        <div className="modalBackground">
          <div className="modal-inner">
            <div className="modal-header"></div>
            <div className="modal-introduction">
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button className="modal-close-btn" onClick={()=>this.handleClickClose()}>
              とじる
            </button>
          </div>
        </div>
        /*----------------------------------------------*/
      );
    }

    return (
      <div className="lesson-card">
        <div className="lesson-item" onClick={() => {this.handleClickLesson();}}>
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;
