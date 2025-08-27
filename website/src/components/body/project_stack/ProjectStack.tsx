import ProjectCard from "./ProjectCard";
import kalmanThumbnail from "@assets/kalman_stock_prediction.jpg";
import porftolioThumbnail from "@assets/react_thumbnail.jpg";
import gpsTrackerThumbnail from "@assets/gps_tracker_thumbnail.jpg";
import pythonVoiceAssistantThumbnail from "@assets/python_voice_assistant_thumbnail.jpg";

function ProjectStack() {
  return (
    <div className="project-stack">
      <h2 className="project-stack-header">Projects</h2>
      <div className="project-stack-list custom-scrollbar">
        <ProjectCard
          title="Portfolio web app"
          description="This is a personal portfolio website that will serve as a comprehensive summary of my professional background, experiences, and career journey. The goal of this project is to create a polished and engaging platform that can effectively showcase my skills, achievements, and career path."
          thumbnail={porftolioThumbnail}
        />
        <ProjectCard
          title="Kalman stock predictor"
          description="The primary objective of this research is to evaluate the effectiveness of the Kalman Filter in enhancing the performance of specific machine learning models. The study will focus on the application of these models in stock price prediction."
          thumbnail={kalmanThumbnail}
        />
        <ProjectCard
          title="GPS tracker"
          description="Design and implementation of software in C++ for the Arduino platform, creation of a backend in Node.js (Express), and deployment of the server on Google Cloud Platform. The project also involved integrating the GPS module and implementing communication between the device and the server."
          thumbnail={gpsTrackerThumbnail}
        />
        <ProjectCard
          title="Python voice assistant"
          description="Voice assistant developed in Python utilizing the GPT-3.5-turbo language model via the OpenAI API. The assistant incorporates speech-to-text (s2t) and text-to-speech (tts) technologies from Google Cloud Platform (GCP) and integrates with the OpenWeather API to provide real-time weather information."
          thumbnail={pythonVoiceAssistantThumbnail}
        />
      </div>
    </div>
  );
}

export default ProjectStack;
