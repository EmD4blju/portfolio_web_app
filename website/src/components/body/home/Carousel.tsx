import CarouselCard from "./CarouselCard";
import CarouselIndicator from "./CarouselIndicator";

interface CarouselProperties {}

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
            description="I'm building a career at the intersection of software engineering and artificial intelligence. From full-stack apps with Python, Node.js, and React, to deploying solutions on GCP—my true focus lies in mastering machine learning and shaping intelligent systems that solve real-world problems."
            imgPath="src/assets/coding-carousel.png"
          />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <CarouselCard
            heading="🔧 Hardware Meets Code"
            description="I love bringing ideas to life with Arduino—whether it’s blinking LEDs, building sensors, or prototyping quirky gadgets. Tinkering at the intersection of hardware and software gives me a hands-on way to explore how the digital world connects to the physical one."
            imgPath="src/assets/arduino-carousel.png"
          />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <CarouselCard
            heading="🎸 Guitarist with Genre Hops"
            description="From shredding metal riffs to mellow reggae grooves, I channel creativity through six strings. I’m always exploring new genres—rock, jazz, and beyond—to find fresh sounds and rhythms."
            imgPath="src/assets/guitar-carousel.png"
          />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <CarouselCard
            heading="🎮 Adventurer at Heart"
            description="Whether I’m wandering Tamriel, surviving the Wasteland, building in Minecraft, or diving into pixelated nostalgia, games fuel my imagination. I’m all about immersive worlds and timeless stories."
            imgPath="src/assets/gaming-carousel.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
