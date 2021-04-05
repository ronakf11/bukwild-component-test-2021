// Code written by Ronak Fofaliya
// rf1999@nyu.edu

import React, { useState, useEffect } from "react";
import logo from "./assets/abc_logo.svg";
import styled from "styled-components";
import content from "./assets/content.json";
import "./App.css";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const App = () => {
  const [pages, setPages] = useState(false);
  const [slug, setSlug] = useState(content.pages[0].slug);

  useEffect(() => {
    setPages(content.pages);
  }, []);

  const loadPageFunc = function () {
    if (pages?.length > 0) {
      return pages.map((page) => {
        if (page.slug === slug) {
          return page.blocks.map((block) => {
            const image = require(`./assets/${block.background}`);
            return (
              <div>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${image.default})`,
                  }}
                ></div>
                <div className="content">
                  <div className="data headline">
                    <span>{block.headline}</span>
                  </div>
                  <div className="data subheading">
                    <span>{block.subhead}</span>
                  </div>
                </div>
                <div className="cta-box">
                  <span className="cta-text">{block.cta}</span>
                  <span className="cta-button">
                    <a href="#">
                      LET'S TALK. <span className="right-arrow">&#8594;</span>
                    </a>
                  </span>
                </div>
              </div>
            );
          });
        }
      });
    } else {
      <div>
        <h1>Loading</h1>
      </div>;
    }
  };

  return (
    <StyledWrapper>
      <header>
        <img src={`${logo}`} alt="abc logo"></img>
        <button>Contact Us</button>
      </header>
      <nav>
        <ul>
          {pages?.length > 0
            ? pages.map((page) => {
                return (
                  <li>
                    <button
                      onClick={() => setSlug(page.slug)}
                      style={{
                        color: page.slug === slug ? "#FFBF04" : "#ffffff",
                      }}
                    >
                      {page.title}
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </nav>
      <main>{loadPageFunc()}</main>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  max-width: 1440px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  min-height: 100vh;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 1rem 12% 0 10%;

    button {
      width: 8.5rem;
      height: 2.5rem;
      border: solid 1px #ffffff;
      background: transparent;
      font-family: HelveticaNeue;
      margin-top: 0.5rem;
      font-size: 1rem;
      text-align: center;
      color: #ffffff;
    }
  }

  nav {
    padding-top: 1rem;
    padding-left: 10%;
    max-width: 1440px;
    margin: auto;

    ul {
      list-style-type: none;
      font-family: HelveticaNeue;

      button {
        text-decoration: none;
        color: #ffffff;
        margin-bottom: 0.3rem;
        font-family: HelveticaNeue;
        background-color: transparent;
        border: none;
      }
    }
  }

  .bg-image {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    z-index: -100;
    animation: fadeIn 2s;
  }

  .content {
    position: absolute;
    top: 25%;
    right: 0;
    left: 0;
    max-width: 1440px;
    display: flex;
    flex-direction: column;

    .data {
      height: auto;
      display: flex;
      align-self: center;
      justify-self: center;
    }

    .headline {
      width: 100%;
      font-size: 80px;
      font-family: HelveticaNeue;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
      font-weight: bold;
      animation: slideFromTop 2s;
    }

    .subheading {
      color: #ffffff;
      font-family: HelveticaNeue;
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.86;
      letter-spacing: normal;
      width: 70%;
      margin: auto;
      margin-top: 2rem;
      float: right;
      animation: slideFromTop 2.5s;
    }
  }

  .cta-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1440px;
    background: #ffffff;
    font-family: HelveticaNeue;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 10rem;
    margin: auto;
    z-index: 100;
    align-items: center;
    justify-content: center;
    animation: slideUp 2s;

    .cta-text {
      font-size: 20px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: -0.63px;
    }

    .cta-button {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      letter-spacing: 1px;
      height: 4rem;

      a {
        text-decoration: none;
        color: black;
      }

      .right-arrow {
        color: #ffbf04;
        font-size: 1.3rem;
        margin-left: 0.5rem;
      }
    }
  }

  @keyframes slideFromTop {
    0% {
      transform: translateY(-300%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(300%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  @media all and (max-width: 390px) {
    .cta-box {
      height: 9rem;
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media all and (min-width: 850px) {
    .content {
      position: absolute;
      top: 30%;
      right: 11%;
      left: 10%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin: auto;
      padding-top: 3rem;
      text-align: left;

      .headline {
        margin-bottom: 12rem;
      }

      .subheading {
        padding-top: 1rem;
      }
    }
    .cta-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: auto;
      margin: 1rem 11% 0rem 10%;

      .cta-text {
        padding-left: 5%;
      }

      .cta-button {
        padding-top: 0;
        padding-right: 23%;
      }
    }
  }
`;

export default App;
