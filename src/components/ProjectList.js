import React, { useState, useEffect } from "react";
import Project from "./Project";

// PROTOTYPE for importing a Project

import HotelsIMG from "../images/portfolio_images/hotels.jpg";
import PortfolioIMG from "../images/portfolio_images/portfolio.jpg";
import RegistrationCenterIMG from "../images/portfolio_images/registration_center_school_theme.jpg";
import ChatCodeXIMG from "../images/portfolio_images/chat_CodeX.jpg";
import CookingWithReactIMG from "../images/portfolio_images/cooking-with-react.jpg";
import CryptoDashboardIMG from "../images/portfolio_images/crypto-dashboard.jpg";

const ProjectList = ({ refreshProjectList }) => {
  const [HotelsIsOpen, setHotelsIsOpen] = useState(false);
  const [RegistrationCenterIsOpen, setRegistrationCenterIsOpen] =
    useState(false);
  const [PortfolioIsOpen, setPortfolioIsOpen] = useState(false);
  const [ChatCodeXIsOpen, setChatCodeXIsOpen] = useState(false);
  const [CookingWithReactIsOpen, setCookingWithReactIsOpen] = useState(false);
  const [CryptoDashboardIsOpen, setCryptoDashboardIsOpen] = useState(false);

  // setHotelsIsOpen, setRegistrationCenterIsOpen, setPortfolioIsOpen, setChatCodeXIsOpen are beeing used as `set${this.id}IsOpen`

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  const HotelsPRJ = {
    id: "Hotels",
    title: "Hotels",
    imageUrl: HotelsIMG,
    imageAlt: "Hotels...",
    article:
      "This is a project that helps the user to find a hotel room and book it.",
    purpose: "Full-Stack Practice",
    technologies: "HTML, CSS, JavaScript, PHP, MySQL",
    liveUrl: "https://pagia.shop",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const PortfolioPRJ = {
    id: "Portfolio",
    title: "Portfolio",
    imageUrl: PortfolioIMG,
    imageAlt: "Portfolio...",
    article: "This is a project that showcases the user's Portfolio.",
    purpose: "Front-End Practice",
    technologies: "HTML, CSS, Bootstrap, JavaScript, React",
    liveUrl: "https://dimitristagaroulias.github.io/My-Portfolio",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/My-Portfolio",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const RegistrationCenterPRJ = {
    id: "RegistrationCenter",
    title: "Registration Center Project",
    imageUrl: RegistrationCenterIMG,
    imageAlt: "Registration Center Project...",
    article:
      "This is a project that the user can register a student to a specific school on the Registration Center and the after the registration this school receives a relevant message.",
    purpose: "Back-End Practice",
    technologies:
      "HTML, CSS, JavaScript, NodeJS, ExpressJS, Socket.IO, MongoDB ",
    liveUrl: "https://registration-center-dimitristagaroulias.vercel.app",
    gitHubUrl:
      "https://github.com/DimitrisTagaroulias/registration_center_STAGING",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const ChatCodeXPRJ = {
    id: "ChatCodeX",
    title: "Chat CodeX",
    imageUrl: ChatCodeXIMG,
    imageAlt: "Chat CodeX...",
    article:
      "This is a project that helps the user to chat with the powerful ChatGPT by OpenAI",
    purpose: "Back-End Practice",
    technologies: "HTML, CSS, JavaScript, NodeJS, ExpressJS, OpenAI API ",
    liveUrl: "https://chat-code-x-dimitristagaroulias.vercel.app",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Chat_CodeX_STAGING",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const CookingWithReactPRJ = {
    id: "CookingWithReact",
    title: "Cooking with React",
    imageUrl: CookingWithReactIMG,
    imageAlt: "Cooking with React...",
    article:
      "This is a project that helps the user to edit recipes and add new ones in the list.",
    purpose: "React Practice",
    technologies: "HTML, CSS, JavaScript, React",
    liveUrl: "https://cooking-with-react-dimitristagaroulias.vercel.app",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Cooking_with_React",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const CryptoDashboardPRJ = {
    id: "CryptoDashboard",
    title: "Crypto Dashboard",
    imageUrl: CryptoDashboardIMG,
    imageAlt: "Crypto Dashboard...",
    article:
      "This is a project that helps the user to convert cryptocurrencies and get the latest cryptocurrency news.",
    purpose: "React / APIs Practice",
    technologies: "HTML, CSS, JavaScript, React, APIs",
    liveUrl: "https://crypto-dashboard-live-dimitristagaroulias.vercel.app/",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Cooking_with_React",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  // ----------------------

  const projects = [
    HotelsPRJ,
    PortfolioPRJ,
    RegistrationCenterPRJ,
    ChatCodeXPRJ,
    CookingWithReactPRJ,
    CryptoDashboardPRJ,
  ];

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------

  useEffect(() => {
    refreshProjectList(projects);
  }, [
    HotelsIsOpen,
    RegistrationCenterIsOpen,
    PortfolioIsOpen,
    ChatCodeXIsOpen,
    CookingWithReactIsOpen,
    CryptoDashboardIsOpen,
  ]);

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------

  if (!projects) return;

  /////////////////////////////////////////////////////////////////

  return (
    <>
      {projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </>
  );
};

export default ProjectList;
