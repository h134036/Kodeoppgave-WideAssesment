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
  //bilder
  Url1 = "http://img.www.omdbapi.com/?i=tt1285016&apikey=2175fa84"; //The Social Network
  Url2 = "http://img.www.omdbapi.com/?i=tt1431045&apikey=2175fa84"; //Deadpool
  Url3 = "http://img.www.omdbapi.com/?i=tt1201607&apikey=2175fa84"; //Harry Potter and the Deathly Hallows: Part 2
  Url4 = "http://img.www.omdbapi.com/?i=tt0258463&apikey=2175fa84"; //The Bourne Identity
  Url5 = "http://img.www.omdbapi.com/?i=tt1220719&apikey=2175fa84"; //Ip Man
  Url6 = "http://img.www.omdbapi.com/?i=tt2294629&apikey=2175fa84"; //Frozen

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      // <div className="greyModal">
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
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
      // </div>
    );
  }
}

export default Modal;
