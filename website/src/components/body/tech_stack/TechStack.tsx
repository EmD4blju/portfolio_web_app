import TechCard from "./TechCard";

interface TechStackProperties {}

function TechStack() {
  return (
    <div className="d-flex flex-column gap-2">
      <h1 className="m-0 p-2">Tech Stack</h1>
      <div className="d-flex flex-wrap justify-content-evenly gap-5">
        <TechCard heading="Python" imgPath="src/assets/python-logo.png" />
        <TechCard heading="Java" imgPath="src/assets/java-logo.png" />
        <TechCard heading="Python" imgPath="src/assets/python-logo.png" />
        <TechCard heading="Java" imgPath="src/assets/java-logo.png" />
        <TechCard heading="Python" imgPath="src/assets/python-logo.png" />
        <TechCard heading="Java" imgPath="src/assets/java-logo.png" />
      </div>
    </div>
  );
}

export default TechStack;
