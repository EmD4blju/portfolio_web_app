import CarouselCard from "./CarouselCard";
import CarouselIndicator from "./CarouselIndicator";
import codingCard from "@assets/coding-carousel.png";
import arduinoCard from "@assets/arduino-carousel.png";
import guitarCard from "@assets/guitar-carousel.png";
import gamingCard from "@assets/gaming-carousel.png";

function Carousel() {
  return (
    <div
      id="homeCarousel"
      className="carousel slide p-5 container"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <CarouselIndicator
          data_bs_target="#homeCarousel"
          data_bs_slide_to="0"
          active={true}
        />
        <CarouselIndicator
          data_bs_target="#homeCarousel"
          data_bs_slide_to="1"
          active={false}
        />
        <CarouselIndicator
          data_bs_target="#homeCarousel"
          data_bs_slide_to="2"
          active={false}
        />
        <CarouselIndicator
          data_bs_target="#homeCarousel"
          data_bs_slide_to="3"
          active={false}
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <CarouselCard
            heading="🧠 AI & Full-Stack Dev in Progress"
            description="From full-stack apps in Python, Node.js, and React to deploying on GCP, I build modern software with a focus on intelligent systems. I’m driven by a passion for machine learning and turning data into real-world impact."
            imgPath={codingCard}
          />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <CarouselCard
            heading="🔧 Hardware Meets Code"
            description="I love bringing ideas to life with Arduino—whether it’s blinking LEDs, building sensors, or prototyping quirky gadgets. Tinkering at the intersection of hardware and software gives me a hands-on way to explore how the digital world connects to the physical one."
            imgPath={arduinoCard}
          />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <CarouselCard
            heading="🎸 Guitarist with Genre Hops"
            description="From shredding metal riffs to mellow reggae grooves, I channel creativity through six strings. I’m always exploring new genres—rock, jazz, and beyond—to find fresh sounds and rhythms."
            imgPath={guitarCard}
          />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <CarouselCard
            heading="🎮 Adventurer at Heart"
            description="Whether I’m wandering Tamriel, surviving the Wasteland, building in Minecraft, or diving into pixelated nostalgia, games fuel my imagination. I’m all about immersive worlds and timeless stories."
            imgPath={gamingCard}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
