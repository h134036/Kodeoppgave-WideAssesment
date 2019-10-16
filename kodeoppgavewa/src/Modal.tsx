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
  kode: string;
}> {
  render() {
    // Rendrer ikke noe om show = false. Returnerer bare null.
    if (!this.props.show) {
      return null;
    }

    let startUrl = "http://img.omdbapi.com/?i=";
    let sluttUrl = "&apikey=2175fa84";
    let mellomUrl = this.props.kode;
    let Url = startUrl + mellomUrl + sluttUrl;

    console.log(Url);

    return (
      <div className="modalContent">
        <form>
          <h2>{this.props.filmer[this.props.index].Title}</h2>
          <img width="125" height="200" src={Url}></img>
          <br />
          Year: {this.props.filmer[this.props.index].Year}
          <br />
          Genre: {this.props.filmer[this.props.index].Genre}
          <br />
          Runtime: {this.props.filmer[this.props.index].Runtime}
          <br />
          Director: {this.props.filmer[this.props.index].Director}
          <br />
          BoxOffice: {this.props.filmer[this.props.index].BoxOffice}
          <br />
          Metascore: {this.props.filmer[this.props.index].Metascore}
          <br />
          imdb-Rating: {this.props.filmer[this.props.index].imdbRating}
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
