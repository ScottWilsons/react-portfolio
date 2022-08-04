import React, { useState } from "react";
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./index.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(3);
  const [next, setNext] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setNext(next === length - 1 ? 0 : next + 1);
    setPrevious(previous === length - 1 ? 0 : previous + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setNext(next === 0 ? length - 1 : next - 1);
    setPrevious(previous === 0 ? length - 1 : previous - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
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
                    className="image"
                    src={SliderData[previous].image}
                    alt="previous slide"
                  />
                  <img
                    className="image center-image"
                    src={slide.image}
                    alt="current slide"
                  />
                  <img
                    className="image"
                    src={SliderData[next].image}
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
