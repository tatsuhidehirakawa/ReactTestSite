import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
// import { IconButton } from "@material-ui/core";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isModalOpen: false }; // 初期のstateにfalseをセット
  // }

  // handleClickLesson() {
  //   this.setState({ isModalOpen: true }); // 開く場合のstateにtrueをセット
  // }

  // handleClickClose() {
  //   this.setState({ isModalOpen: false }); // 閉じる場合のstateにfalseをセット
  // }

  render() {
    // let modal;
    // if (this.state.isModalOpen) {
    //   modal = (
    //     <div className="modalBackground">
    //       <div className="modal-inner">
    //         <div className="modal-header"></div>
    //         <div className="modal-introduction">
    //           <h2>{this.props.name}</h2>
    //           <p>{this.props.introduction}</p>
    //         </div>
    //         <button className="modal-close-btn" onClick={()=>this.handleClickClose()}>
    //           とじる
    //         </button>
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div className="card--outline">
        {/* <div className="card--inline" onClick={() => {this.handleClickLesson();}}> */}
        <div className="card--inline">
          <Link to="/Offer">
            <img src={this.props.image} alt={this.props.introduction}/>
          </Link>
          {/* <IconButton color="primary" onClick={() => this.props.snsPost()}>
            <FavoriteBorder />
          </IconButton> */}
        </div>
        <p>{this.props.name}</p>
        <p><b>{this.props.location}</b>、日本、{this.props.distance}km</p>
        {/* {modal} */}
      </div>
    );
  }
}

export default Card;
