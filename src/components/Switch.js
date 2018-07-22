import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Switch.scss';


class Switch extends Component {
  render() {
    return (
      <div className="switch-wrapper">
        <div className="sun"></div>
        <div className="toggle-wrapper">
          <input id="switch" type="checkbox" />
          <label for="switch" id="toggle">Toggle</label>
        </div>
        <div className="moon"></div>
      </div>
    );
  }
}

export default Switch;