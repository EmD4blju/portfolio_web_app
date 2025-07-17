import TechCard from "./TechCard";

function TechStack() {
  return (
    <div className="d-flex flex-column gap-2">
      <h1 className="m-0 p-2">Tech Stack</h1>
      <div className="d-flex flex-wrap justify-content-evenly gap-5">
        <TechCard
          heading="Python"
          imgPath="src/assets/python-logo.png"
          level={90}
          shieldImages={[
            {
              src: "https://img.shields.io/badge/Jupyter%20Notebook-F37626?style=plastic&logo=jupyter&logoColor=white",
              alt: "Jupyter Notebook",
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
              src: "https://img.shields.io/badge/Seaborn-4C72B0?style=plastic&logo=seaborn&logoColor=white",
              alt: "Seaborn",
            },
            {
              src: "https://img.shields.io/badge/Astral_UV-7C3AED?style=plastic&logo=astral&logoColor=white",
              alt: "Astral UV",
            },
            {
              src: "https://img.shields.io/badge/Matplotlib-11557C?style=plastic&logo=matplotlib&logoColor=white",
              alt: "Matplotlib",
            },
            {
              src: "https://img.shields.io/badge/Keras-D00000?style=plastic&logo=keras&logoColor=white",
              alt: "Keras",
            },
            {
              src: "https://img.shields.io/badge/FilterPy-2D6A4F?style=plastic&logo=filter&logoColor=white",
              alt: "FilterPy",
            },
            {
              src: "https://img.shields.io/badge/Flask-000000?style=plastic&logo=flask&logoColor=white",
              alt: "Flask",
            },
          ]}
        />
        <TechCard
          heading="Java"
          imgPath="src/assets/java-logo.png"
          level={75}
          shieldImages={[
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
          heading="C#"
          imgPath="src/assets/cs-logo.png"
          level={60}
          shieldImages={[
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
