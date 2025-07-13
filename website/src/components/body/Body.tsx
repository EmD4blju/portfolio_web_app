import Home from "./home/Home";
import TechStack from "./tech_stack/TechStack";

interface BodyProperties {}

function Body() {
  return (
    <div className="rounded-4 p-3 bg-dark border-dark border-start border-end flex-fill align-self-center w-100">
      <Home />
      <hr />
      <TechStack />
    </div>
  );
}

export default Body;
