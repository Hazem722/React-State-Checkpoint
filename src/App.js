import "./App.css";
import React, { Component } from "react";
import img from "./LewisHamilton.jpg";
class App extends Component {
  state = {
    Person: {
      fullName: "Lewis Hamilton",
      bio: "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver. He currently competes in Formula One for Mercedes, having previously driven for McLaren from 2007 to 2012. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (182), among others.",
      imgSrc: img,
      profession: "Formula One Driver",
    },
    show: true,
    digit: 0,
  };
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        digit: prevState.digit + 1,
      }));
    }, 1000);
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <div className="globalStyle">
            <div>
              <h1>{this.state.Person.fullName}</h1>
              <h2>{this.state.Person.profession}</h2>
              <p>{this.state.Person.bio}</p>
            </div>
            <img src={this.state.Person.imgSrc} alt="Lewis Hamilton"></img>
            <br></br>
          </div>
        )}
        {/* Create a field that shows the time interval since the last component was mounted using the component lifecycle. */}
        <div className="Interval">
          Your Component was mounted <span>{this.state.digit} seconds</span> ago
        </div>

        <button onClick={this.handleShowPerson}>click here</button>
      </div>
    );
  }
}

export default App;

// Create a project using create-react-app.
// Transform the App.js into a class-based component.
// Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
// Add a button that toggles the show state. When the show state is true, the person's profile will appear.
// Create a field that shows the time interval since the last component was mounted using the component lifecycle.
// Hint: use the setInterval method.
