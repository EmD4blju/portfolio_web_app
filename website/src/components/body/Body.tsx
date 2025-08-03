import ContributionStack from "./contribution_stack/ContributionStack";
import Home from "./home/Home";
import TechStack from "./tech_stack/TechStack";

function Body() {
  return (
    <div className="rounded-4 p-3 bg-dark border-dark border-start border-end flex-fill align-self-center w-100">
      <Home />
      <hr />
      <TechStack />
      <hr />
      <ContributionStack />
    </div>
  );
}

export default Body;
