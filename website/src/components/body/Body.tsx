import CertificationStack from "./certification_stack/CertificationStack";
import Home from "./home/Home";
import TechStack from "./tech_stack/TechStack";

function Body() {
  return (
    <div className="body">
      <Home />
      <TechStack />
      <CertificationStack />
    </div>
  );
}

export default Body;
