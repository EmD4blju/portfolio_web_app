import Home from "./home/Home";

interface BodyProperties {}

function Body() {
  return (
    <div className="rounded-4 p-3 bg-dark border-dark border-start border-end flex-fill align-self-center w-100">
      <Home />
    </div>
  );
}

export default Body;
