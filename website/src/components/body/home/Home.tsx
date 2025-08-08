import Carousel from "./Carousel";
import pythonLogo from "@assets/python-logo.png";
import javaLogo from "@assets/java-logo.png";
import gcpLogo from "@assets/gcp-logo.png";
import reactLogo from "@assets/react-logo.png";
import aiLogo from "@assets/ai-logo.png";

function Home() {
  const techItemWidth = 50;
  const techItemHeight = 50;
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center gap-3">
      <Carousel />
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <img
          src={pythonLogo}
          alt="image"
          width={techItemWidth}
          height={techItemHeight}
        />
        <img
          src={gcpLogo}
          alt="image"
          width={techItemWidth}
          height={techItemHeight}
        />
        <img
          src={reactLogo}
          alt="image"
          width={techItemWidth}
          height={techItemHeight}
        />
        <img
          src={aiLogo}
          alt="image"
          width={techItemWidth}
          height={techItemHeight}
        />
        <img
          src={javaLogo}
          alt="image"
          width={techItemWidth}
          height={techItemHeight}
        />
      </div>
    </div>
  );
}

export default Home;
