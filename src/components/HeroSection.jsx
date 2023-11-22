import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ data }) => {
  const { name } = data;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              perspiciatis totam vero magni nesciunt repudiandae deleniti cumque
              aliquam voluptate ipsam? Ex natus repellat iusto sunt, ipsam
              minima error rerum nemo!
            </p>
            <Button>Shop Now</Button>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="./images/hero.jpg" className="image-style" alt="hero section image" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 10rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data{
        margin-bottom: 0;
    }

  }
  .hero-section-image{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure{
    position: relative;
    &::after{
        content: "";
        width: 60%;
        height: 80%;
        background-color: rgba(81, 56, 238, 0.4);
        position: absolute;
        left: 50%;
        top: -5rem;
        z-index: -1;
    }
  }
  .image-style{
    width: 100%;
    height: auto;
  }
`;

export default HeroSection;
