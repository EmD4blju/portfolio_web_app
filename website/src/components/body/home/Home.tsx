import codingCard from "@assets/coding-carousel.png";
import arduinoCard from "@assets/arduino-carousel.png";
import guitarCard from "@assets/guitar-carousel.png";
import gamingCard from "@assets/gaming-carousel.png";
// import pythonLogo from "@assets/python-logo.png";
// import javaLogo from "@assets/java-logo.png";
// import gcpLogo from "@assets/gcp-logo.png";
// import reactLogo from "@assets/react-logo.png";
// import aiLogo from "@assets/ai-logo.png";
import HomeCard from "./HomeCard";

function Home() {
  return (
    <div className="flex flex-col justify-center h-[70dvh] bg-neutral-500">
      <HomeCard
        heading="🧠 AI & Full-Stack Dev in Progress"
        description="From full-stack apps in Python, Node.js, and React to deploying on GCP, I build modern software with a focus on intelligent systems. I’m driven by a passion for machine learning and turning data into real-world impact."
        imgPath={codingCard}
      />
      {/* <HomeCard
        heading="🔧 Hardware Meets Code"
        description="I love bringing ideas to life with Arduino—whether it’s blinking LEDs, building sensors, or prototyping quirky gadgets. Tinkering at the intersection of hardware and software gives me a hands-on way to explore how the digital world connects to the physical one."
        imgPath={arduinoCard}
      />
      <HomeCard
        heading="🎸 Guitarist with Genre Hops"
        description="From shredding metal riffs to mellow reggae grooves, I channel creativity through six strings. I’m always exploring new genres—rock, jazz, and beyond—to find fresh sounds and rhythms."
        imgPath={guitarCard}
      />
      <HomeCard
        heading="🎮 Adventurer at Heart"
        description="Whether I’m wandering Tamriel, surviving the Wasteland, building in Minecraft, or diving into pixelated nostalgia, games fuel my imagination. I’m all about immersive worlds and timeless stories."
        imgPath={gamingCard}
      /> */}
    </div>
  );
}

export default Home;
