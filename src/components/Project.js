// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
  const { ...project } = props;

  return (
    <>
      <div
        id={project.id}
        className="portfolio-image-box d-flex justify-content-center col-md-5 col-sm-10"
      >
        <img
          className="portfolio-image col"
          src={project.imageUrl}
          alt={project.imageAlt}
        />
        <div
          className="overflow-and-icon-container"
          onClick={(e) => {
            return project.setProjectIsOpenTo(true);
          }}
        >
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        <div className="project-title">{project.title}</div>
      </div>
    </>
  );
};

export default Project;
