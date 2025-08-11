import {
  SiPython,
  SiLangchain,
  SiPytorch,
  SiGooglecloud,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiArduino,
  SiUbuntu,
  SiGit,
  SiNodedotjs,
  SiObsidian,
} from "react-icons/si";
import TechStackIcon from "./TechStackIcon";

function TechStack() {
  return (
    <div className="tech-stack">
      <TechStackIcon icon={SiPython} tooltip="Python" />
      <TechStackIcon icon={SiLangchain} tooltip="LangChain" />
      <TechStackIcon icon={SiPytorch} tooltip="PyTorch" />
      <TechStackIcon icon={SiGooglecloud} tooltip="Google Cloud" />
      <TechStackIcon icon={SiFlask} tooltip="Flask" />
      <TechStackIcon icon={SiNumpy} tooltip="NumPy" />
      <TechStackIcon icon={SiPandas} tooltip="Pandas" />
      <TechStackIcon icon={SiTailwindcss} tooltip="Tailwind CSS" />
      <TechStackIcon icon={SiBootstrap} tooltip="Bootstrap" />
      <TechStackIcon icon={SiReact} tooltip="React" />
      <TechStackIcon icon={SiArduino} tooltip="Arduino" />
      <TechStackIcon icon={SiUbuntu} tooltip="Ubuntu" />
      <TechStackIcon icon={SiGit} tooltip="Git" />
      <TechStackIcon icon={SiNodedotjs} tooltip="Node.js" />
      <TechStackIcon icon={SiObsidian} tooltip="Obsidian" />
    </div>
  );
}

export default TechStack;
