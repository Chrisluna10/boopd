import React from "react"
import AppRouter from "./components/AppRouter";

class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <AppRouter loggedIn={this.props.logged_in} currentUser={this.props.current_user}/>
      </React.Fragment>
    );
  }
}

export default App
