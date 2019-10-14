import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import CSS from "csstype";
import { isUserWhitespacable } from "@babel/types";

class Modal extends React.Component<{
  show: boolean;
  onClose: any;
  index: number;
  filmer: any;
}> {
  render() {
    // Rendrer ikke noe om show = false. Returnerer bare null.
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modalContent">
        <form>
          <h2>{this.props.filmer[this.props.index].Title}</h2>
          <br />
          {this.props.filmer[this.props.index].Year}
          <br />
          {this.props.filmer[this.props.index].Genre}
          <br />
          {this.props.filmer[this.props.index].Runtime}
          <br />
          {this.props.filmer[this.props.index].Director}
          <br />
          {this.props.filmer[this.props.index].BoxOffice}
          <br />
          {this.props.filmer[this.props.index].Metascore}
          <br />
          {this.props.filmer[this.props.index].imdbRating}
          <br />
          <h3>Plot:</h3>
          {this.props.filmer[this.props.index].Plot}
        </form>
        <div className="footer">
          <button id="denneKnapp" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
