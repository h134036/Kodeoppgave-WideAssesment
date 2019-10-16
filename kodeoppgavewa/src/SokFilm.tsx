import React from "react";
import PropTypes from "prop-types";
import "./SokFilm.css";

class SokFilm extends React.Component<{
  show: boolean;
  filmer: any;
  onClose: any;
  sendData: any;
}> {
  leggTil(tall: number) {
    let tempFilm = this.props.filmer[tall];
    let Url = tempFilm.imdbID;
    this.props.sendData(Url);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="FilmerSok">
        <table id="myTableSok">
          <tbody>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th></th>
            </tr>
            {this.props.filmer.map((each: any, index: number) => {
              return (
                <tr>
                  <td key={Math.random() * 1000}>{each.Title}</td>
                  <td key={Math.random() * 1000}>{each.Year}</td>
                  <input
                    id="addMovieButton"
                    key={Math.random() * 1000}
                    value="Add to my table"
                    type="submit"
                    onClick={() => this.leggTil(index)}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="footerSok">
          <button id="denneKnappSok" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default SokFilm;
