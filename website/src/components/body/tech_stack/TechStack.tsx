import TechCard from "./TechCard";
import pythonLogo from "@assets/python-logo.png";
import javaLogo from "@assets/java-logo.png";
import csLogo from "@assets/cs-logo.png";
import gcpLogo from "@assets/gcp-logo.png";
import reactLogo from "@assets/react-logo.png";
import aiLogo from "@assets/ai-logo.png";

function TechStack() {
  return (
    <div className="d-flex flex-column gap-2">
      <h1 className="m-0 p-2">Tech Stack</h1>
      <div className="d-flex flex-wrap justify-content-evenly gap-5">
        <TechCard
          heading="Python & Data Science"
          imgPath={pythonLogo}
          level={90}
          shieldImages={[
            {
              src: "https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white",
              alt: "Python",
            },
            {
              src: "https://img.shields.io/badge/Pandas-150458?style=plastic&logo=pandas&logoColor=white",
              alt: "Pandas",
            },
            {
              src: "https://img.shields.io/badge/Numpy-013243?style=plastic&logo=numpy&logoColor=white",
              alt: "Numpy",
            },
            {
              src: "https://img.shields.io/badge/Matplotlib-11557C?style=plastic&logo=matplotlib&logoColor=white",
              alt: "Matplotlib",
            },
            {
              src: "https://img.shields.io/badge/Seaborn-4C72B0?style=plastic&logo=seaborn&logoColor=white",
              alt: "Seaborn",
            },
            {
              src: "https://img.shields.io/badge/FilterPy-003B6F?style=plastic&logo=python&logoColor=white",
              alt: "FilterPy",
            },
            {
              src: "https://img.shields.io/badge/Jupyter%20Notebook-F37626?style=plastic&logo=jupyter&logoColor=white",
              alt: "Jupyter Notebook",
            },
          ]}
        />
        <TechCard
          heading="Web Development"
          imgPath={reactLogo}
          level={75}
          shieldImages={[
            {
              src: "https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB",
              alt: "React",
            },
            {
              src: "https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=white",
              alt: "TypeScript",
            },
            {
              src: "https://img.shields.io/badge/Flask-000000?style=plastic&logo=flask&logoColor=white",
              alt: "Flask",
            },
            {
              src: "https://img.shields.io/badge/HTML-E34F26?style=plastic&logo=html5&logoColor=white",
              alt: "HTML",
            },
            {
              src: "https://img.shields.io/badge/CSS-1572B6?style=plastic&logo=css3&logoColor=white",
              alt: "CSS",
            },
            {
              src: "https://img.shields.io/badge/Bootstrap-563D7C?style=plastic&logo=bootstrap&logoColor=white",
              alt: "Bootstrap",
            },
            {
              src: "https://img.shields.io/badge/Node.js-339933?style=plastic&logo=node.js&logoColor=white",
              alt: "Node.js",
            },
          ]}
        />
        <TechCard
          heading="AI Tools"
          imgPath={aiLogo}
          level={65}
          shieldImages={[
            {
              src: "https://img.shields.io/badge/PyTorch-EE4C2C?style=plastic&logo=pytorch&logoColor=white",
              alt: "PyTorch",
            },
            {
              src: "https://img.shields.io/badge/Keras-D00000?style=plastic&logo=keras&logoColor=white",
              alt: "Keras",
            },
            {
              src: "https://img.shields.io/badge/LangChain-000000?style=plastic&logo=ai&logoColor=white",
              alt: "LangChain",
            },
          ]}
        />
        <TechCard
          heading="Cloud & DevOps"
          imgPath={gcpLogo}
          level={70}
          shieldImages={[
            {
              src: "https://img.shields.io/badge/Google_Cloud-4285F4?style=plastic&logo=googlecloud&logoColor=white",
              alt: "Google Cloud Platform",
            },
            {
              src: "https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=docker&logoColor=white",
              alt: "Docker",
            },
            {
              src: "https://img.shields.io/badge/Ubuntu-E95420?style=plastic&logo=ubuntu&logoColor=white",
              alt: "Ubuntu",
            },
            {
              src: "https://img.shields.io/badge/Git-F05032?style=plastic&logo=git&logoColor=white",
              alt: "Git",
            },
            {
              src: "https://img.shields.io/badge/Astral_UV-7C3AED?style=plastic&logo=astral&logoColor=white",
              alt: "Astral UV",
            },
          ]}
        />
        <TechCard
          heading="Java"
          imgPath={javaLogo}
          level={75}
          shieldImages={[
            {
              src: "https://img.shields.io/badge/Java-007396?style=plastic&logo=java&logoColor=white",
              alt: "Java",
            },
            {
              src: "https://img.shields.io/badge/Swing-007396?style=plastic&logo=java&logoColor=white",
              alt: "Java Swing",
            },
            {
              src: "https://img.shields.io/badge/JavaFX-087ea4?style=plastic&logo=openjdk&logoColor=white",
              alt: "JavaFX",
            },
            {
              src: "https://img.shields.io/badge/Hibernate-59666C?style=plastic&logo=hibernate&logoColor=white",
              alt: "Hibernate",
            },
            {
              src: "https://img.shields.io/badge/OOP-231F20?style=plastic&logo=semanticweb&logoColor=white",
              alt: "Object-Oriented Programming",
            },
            {
              src: "https://img.shields.io/badge/Maven-C71A36?style=plastic&logo=apachemaven&logoColor=white",
              alt: "Maven",
            },
          ]}
        />
        <TechCard
          heading="C# & .NET"
          imgPath={csLogo}
          level={65}
          shieldImages={[
            {
              src: "https://img.shields.io/badge/C%23-239120?style=plastic&logo=csharp&logoColor=white",
              alt: "C#",
            },
            {
              src: "https://img.shields.io/badge/Entity%20Framework-68217A?style=plastic&logo=.net&logoColor=white",
              alt: "Entity Framework",
            },
            {
              src: "https://img.shields.io/badge/OOP-231F20?style=plastic&logo=semanticweb&logoColor=white",
              alt: "Object-Oriented Programming",
            },
            {
              src: "https://img.shields.io/badge/NuGet-004880?style=plastic&logo=nuget&logoColor=white",
              alt: "NuGet",
            },
            {
              src: "https://img.shields.io/badge/Swagger-85EA2D?style=plastic&logo=swagger&logoColor=black",
              alt: "Swagger",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default TechStack;
