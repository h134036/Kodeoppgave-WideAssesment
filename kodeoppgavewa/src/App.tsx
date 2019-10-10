import React, { Component } from "react";
import { array, object } from "prop-types";
import "./App.css";
import Film from "./FIlm";

interface Istate {
  filmer: any[];
  title: boolean;
  year: boolean;
  metascoreAsc: boolean;
}

interface Iprops {}

class App extends React.Component<Iprops, Istate> {
  constructor(props: any) {
    super(props);
    this.state = { filmer: [], title: true, year: true, metascoreAsc: true };
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByYear = this.sortByYear.bind(this);
    this.sortByMetascore = this.sortByMetascore.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
  }

  Url1 = "http://www.omdbapi.com/?i=tt1285016&apikey=2175fa84"; //The Social Network
  Url2 = "http://www.omdbapi.com/?i=tt1431045&apikey=2175fa84"; //Deadpool
  Url3 = "http://www.omdbapi.com/?i=tt1201607&apikey=2175fa84"; //Harry Potter and the Deathly Hallows: Part 2
  Url4 = "http://www.omdbapi.com/?i=tt0258463&apikey=2175fa84"; //The Bourne Identity
  Url5 = "http://www.omdbapi.com/?i=tt1220719&apikey=2175fa84"; //Ip Man
  Url6 = "http://www.omdbapi.com/?i=tt2294629&apikey=2175fa84"; //Frozen

  componentDidMount() {
    this.getDataAPI();
  }

  async getDataAPI() {
    let tempFilmer: any = [];

    let response = await fetch(this.Url1);
    let data = await response.json();
    tempFilmer.push(data);

    response = await fetch(this.Url2);
    data = await response.json();
    tempFilmer.push(data);

    response = await fetch(this.Url3);
    data = await response.json();
    tempFilmer.push(data);

    response = await fetch(this.Url4);
    data = await response.json();
    tempFilmer.push(data);

    response = await fetch(this.Url5);
    data = await response.json();
    tempFilmer.push(data);

    response = await fetch(this.Url6);
    data = await response.json();
    tempFilmer.push(data);

    this.setState({ filmer: tempFilmer });
  }

  //Kanskje den dummeste, mest knotete koden jeg har skrivet. Men den funker om titlene er like, men bare
  //med hensyn til de 5 første characters-ene. Skal se på om jeg får tid :)
  sortByTitle() {
    if (!this.state.title) {
      this.setState(prevState => {
        this.state.filmer.sort(
          (a, b) =>
            a.Title.charCodeAt(0) * 10000 +
            a.Title.charCodeAt(1) * 1000 +
            a.Title.charCodeAt(2) * 100 +
            a.Title.charCodeAt(3) * 10 +
            a.Title.charCodeAt(4) -
            (b.Title.charCodeAt(0) * 10000 +
              b.Title.charCodeAt(1) * 1000 +
              b.Title.charCodeAt(2) * 100 +
              b.Title.charCodeAt(3) * 10 +
              b.Title.charCodeAt(4))
        );
      });
      this.setState({ title: true });
    } else {
      this.setState(prevState => {
        this.state.filmer.sort(
          (a, b) =>
            b.Title.charCodeAt(0) * 10000 +
            b.Title.charCodeAt(1) * 1000 +
            b.Title.charCodeAt(2) * 100 +
            b.Title.charCodeAt(3) * 10 +
            b.Title.charCodeAt(4) -
            (a.Title.charCodeAt(0) * 10000 +
              a.Title.charCodeAt(1) * 1000 +
              a.Title.charCodeAt(2) * 100 +
              a.Title.charCodeAt(3) * 10 +
              a.Title.charCodeAt(4))
        );
      });
      this.setState({ title: false });
    }
  }

  sortByYear() {
    if (!this.state.year) {
      this.setState(prevState => {
        this.state.filmer.sort((a, b) => a.Year - b.Year);
      });
      this.setState({ year: true });
    } else {
      this.setState(prevState => {
        this.state.filmer.sort((a, b) => b.Year - a.Year);
      });
      this.setState({ year: false });
    }
  }

  sortByMetascore() {
    if (!this.state.metascoreAsc) {
      this.setState(prevState => {
        this.state.filmer.sort((a, b) => a.Metascore - b.Metascore);
      });
      this.setState({ metascoreAsc: true });
    } else {
      this.setState(prevState => {
        this.state.filmer.sort((a, b) => b.Metascore - a.Metascore);
      });
      this.setState({ metascoreAsc: false });
    }
  }

  displayInfo = (e: any) => {
    const song = e.detail.item.getAttribute("data-item");
    console.log("We need to get the details for ", song);
  };

  render() {
    return (
      <div>
        <h1>gg</h1>
        <div className="Filmer">
          <table id="myTable">
            <tbody>
              <tr>
                <th onClick={this.sortByTitle}>Title</th>
                <th onClick={this.sortByYear}>Year</th>
                <th onClick={this.sortByMetascore}>Rating</th>
              </tr>
              {this.state.filmer.map((each, index) => {
                return (
                  <tr data-item={each} onClick={this.displayInfo}>
                    <td key={each.Metascore + Math.random() * 1000}>
                      {each.Title}
                    </td>
                    <td key={each.Metascore + Math.random() * 1000}>
                      {each.Year}
                    </td>
                    <td key={each.Metascore + Math.random() * 1000}>
                      {each.Metascore}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Film />
      </div>
    );
  }
}

export default App;
