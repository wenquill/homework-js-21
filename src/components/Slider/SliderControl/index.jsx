import React, { Component } from "react";
import styles from './../Slider.module.css'

export default class SliderControl extends Component {

  render() {
    const { delay, delaySelect } = this.props;
    return (
      <div className={styles.controlUnitContainer}>
        <label htmlFor="delay">Select the delay:</label>
        <input
          type="number"
          name="delay"
          min={1}
          max={10}
          value={delay / 1000}
          onChange={delaySelect}
        />
      </div>
    );
  }
}
