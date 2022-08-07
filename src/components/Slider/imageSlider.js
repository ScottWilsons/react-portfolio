import React, { useState } from "react";
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./index.css";

const ImageSlider = () => {
  const length = SliderData.length;
  const [previousBackTwo, setPreviousBackTwo] = useState(length - 2);
  const [previous, setPrevious] = useState(length - 1);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [nextForwardTwo, setNextForwardTwo] = useState(2);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setNext(next === length - 1 ? 0 : next + 1);
    setPrevious(previous === length - 1 ? 0 : previous + 1);
    setPreviousBackTwo(
      previousBackTwo === length - 1 ? 0 : previousBackTwo + 1
    );
    setNextForwardTwo(nextForwardTwo === length - 1 ? 0 : nextForwardTwo + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setNext(next === 0 ? length - 1 : next - 1);
    setPrevious(previous === 0 ? length - 1 : previous - 1);
    setPreviousBackTwo(
      previousBackTwo === 0 ? length - 1 : previousBackTwo - 1
    );
    setNextForwardTwo(nextForwardTwo === 0 ? length - 1 : nextForwardTwo - 1);
  };

  if (length <= 1) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="slider-content ">
                  <img
                    className="imageSides"
                    src={SliderData[previousBackTwo].image}
                    alt="previous slide"
                  />
                  <img
                    className="image-inner"
                    src={SliderData[previous].image}
                    alt="previous slide"
                  />
                  <div className="center-container">
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="center-anchor"
                    >
                      <img
                        className="center-image"
                        src={slide.image}
                        alt="current slide"
                      />
                      <p className="center-project-text">{slide.title}</p>
                    </a>
                  </div>
                  <img
                    className="image-inner"
                    src={SliderData[next].image}
                    alt="next slide"
                  />
                  <img
                    className="imageSides"
                    src={SliderData[nextForwardTwo].image}
                    alt="next slide"
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ImageSlider;
