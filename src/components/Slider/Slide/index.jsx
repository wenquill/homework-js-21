import React, { Component } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import styles from "./../Slider.module.css";

export default class Slide extends Component {

  render() {
    const { slides, isPlaying, index, prevSlide, nextSlide, handlePlayBtn } = this.props;
    return (
      <figure className={styles.slidesContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            height="300"
            src={slides[index].src}
            alt={slides[index].title}
          />
        </div>
        <button
          className={styles.playBtn}
          onClick={handlePlayBtn}
        >
          {isPlaying ? "pause" : "play"}
        </button>
        <h2 className={styles.sliderTitle}>
          {slides[index].title}
        </h2>
        <figcaption className={styles.imageDescription}>
          {slides[index].description}
        </figcaption>
        <button
          className={`${styles.prevBtn} ${styles.buttons}`}
          onClick={() => prevSlide()}
        >
          <GrLinkPrevious size="25" />
        </button>
        <button
          className={`${styles.nextBtn} ${styles.buttons}`}
          onClick={() => nextSlide()}
        >
          <GrLinkNext size="25" />
        </button>
      </figure>
    );
  }
}
