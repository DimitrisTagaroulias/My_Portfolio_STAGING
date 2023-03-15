import React, { useState } from "react";
import ProjectList from "./ProjectList";
import PopupBox from "./PopupBox";

const Portfolio = () => {
  const [projectList, setProjectList] = useState("");

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="projects-wrapper row justify-content-center">
          <ProjectList
            refreshProjectList={(projectList) => {
              setProjectList(projectList);
            }}
          />
        </div>
      </div>
      <PopupBox projects={projectList} />
    </div>
  );
};

export default Portfolio;
