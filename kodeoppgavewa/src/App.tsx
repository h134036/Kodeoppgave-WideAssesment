/**@jsx jsx */

import React, { Component } from "react";
import { array, object, number } from "prop-types";
// import "./App.css";
import { css, jsx } from "@emotion/core";
import Film from "./FIlm";
import Modal from "./Modal";

interface Istate {
  filmer: any[];
  isModalOpen: boolean;
  rekkefølge: number;
  search: string;
  Action: boolean;
  Adventure: boolean;
  SciFi: boolean;
  title: boolean;
  year: boolean;
  metascoreAsc: boolean;
}

interface Iprops {}

class App extends React.Component<Iprops, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      filmer: [],
      isModalOpen: false,
      rekkefølge: 1,
      search: "",
      Action: false,
      Adventure: false,
      SciFi: false,
      title: true,
      year: true,
      metascoreAsc: true
    };

    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByYear = this.sortByYear.bind(this);
    this.sortByMetascore = this.sortByMetascore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.commitFilters = this.commitFilters.bind(this);
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

    console.log(this.state.filmer[0].Title);
  }

  // imdbRating, Runtime, Genre, Director, BoxOffice

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

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

  endreIndex(tall: number) {
    this.setState({ rekkefølge: tall });
  }

  handleChange = (teksten: string) => {
    this.setState({ search: teksten });
  };

  handleAction = () => {
    this.setState({ Action: !this.state.Action });
  };

  handleAdventure = () => {
    this.setState({ Adventure: !this.state.Adventure });
  };

  handleSciFi = () => {
    this.setState({ SciFi: !this.state.SciFi });
  };

  commitFilters() {
    let tempFilmer: any = [];

    if (this.state.Action) {
      tempFilmer = this.state.filmer.filter(each => {
        return each.Genre.indexOf("Action") !== -1;
      });
    }
    return tempFilmer;
  }

  render() {
    const h1Style = css({
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      position: "absolute",
      right: 0,
      bottom: "2rem",
      padding: "0.5rem",
      fontFamily: "sans-serif",
      fontSize: "1.5rem",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
    });

    const titleStyle = css({
      boxSizing: "border-box",
      width: 300,
      height: 200
    });

    // imdbRating, Runtime, Genre, Director, BoxOffice

    let filteredMovies = this.state.filmer.filter(each => {
      return each.Genre.indexOf(this.state.search) !== -1;
    });

    return (
      <div>
        <h1 css={titleStyle}>Heloo</h1>
        <Modal
          show={this.state.isModalOpen}
          onClose={this.toggleModal}
          index={this.state.rekkefølge}
          filmer={this.state.filmer}
        />

        <form>
          Action
          <input
            type="checkbox"
            name="Action"
            checked={this.state.Action}
            onChange={this.handleAction}
          />
          Adventure
          <input
            type="checkbox"
            name="Adventure"
            checked={this.state.Adventure}
            onChange={this.handleAdventure}
          />
          Sci-Fi
          <input
            type="checkbox"
            name="Sci-Fi"
            checked={this.state.SciFi}
            onChange={this.handleSciFi}
          />
          <input type="button" value="Submit" onClick={this.commitFilters} />
        </form>

        <input
          type="text"
          value={this.state.search}
          onChange={(e: any) => this.handleChange(e.target.value)}
        />

        <div className="Filmer">
          <table id="myTable">
            <tbody>
              <tr>
                <th onClick={this.sortByTitle}>Title</th>
                <th onClick={this.sortByYear}>Year</th>
                <th onClick={this.sortByMetascore}>Rating</th>
                <th>Genre</th>
              </tr>
              {filteredMovies.map((each, index) => {
                return (
                  <tr onClick={() => this.endreIndex(index)}>
                    <td
                      onClick={this.toggleModal}
                      key={each.Metascore + Math.random() * 1000}
                    >
                      {each.Title}
                    </td>
                    <td key={each.Metascore + Math.random() * 1000}>
                      {each.Year}
                    </td>
                    <td key={each.Metascore + Math.random() * 1000}>
                      {each.Metascore}
                    </td>
                    <td key={each.Metascore + Math.random() * 1000}>
                      {each.Genre}
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
