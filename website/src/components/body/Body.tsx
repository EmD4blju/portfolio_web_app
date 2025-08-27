import CertificationStack from "./certification_stack/CertificationStack";
import Home from "./home/Home";
import ProjectStack from "./project_stack/ProjectStack";
import TechStack from "./tech_stack/TechStack";

function Body() {
  return (
    <div className="body">
      <Home />
      <TechStack />
      <CertificationStack />
      <ProjectStack />
    </div>
  );
}

export default Body;
