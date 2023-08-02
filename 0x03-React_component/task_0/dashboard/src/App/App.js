import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
// import { CourseShape } from "../shapes/CourseShape";

class App extends Component {
  constructor(props) {
    super(props);

    // Define state variables to manage the login status and display drawer status
    this.state = {
      isUserLoggedIn: props.isLoggedIn,
      isDrawerOpen: props.displayDrawer,
      listCourses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ],
    };
  }

  render() {
    const { isUserLoggedIn, isDrawerOpen, listCourses, listNotifications } =
      this.state;

    return (
      <>
        {/* Show notifications when displayDrawer is true */}
        {isDrawerOpen && (
          <Notifications
            displayDrawer={true}
            listNotifications={listNotifications}
          />
        )}

        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="App-body">
            {/* Pass the listCourses array as a prop to the CourseList component */}
            {isUserLoggedIn ? (
              <CourseList listCourses={listCourses} />
            ) : (
              <Login />
            )}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

// Define the prop types for the App component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
};

// Set the default prop values
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: true,
};

export default App;
