import React from "react";
import Styles from "./sample.css";
import PropTypes from "prop-types";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const { message } = this.props;

    console.log(message);
    return (
      <div className={Styles.sample}>
        <div className={Styles.heading}>Eightfold's UI starts here.</div>
        <p className={Styles.para}>
          Welcome to the React, Express, Webpack powered app.
        </p>
      </div>
    );
  }
}

Sample.propTypes = {
  message: PropTypes.string
};

export default Sample;
