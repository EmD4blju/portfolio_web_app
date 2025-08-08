import ContributionStack from "./contribution_stack/ContributionStack";
import Home from "./home/Home";

function Body() {
  return (
    <>
      <div className="flex-fill align-self-center w-100">
        <Home />
        <ContributionStack />
      </div>
    </>
  );
}

export default Body;
