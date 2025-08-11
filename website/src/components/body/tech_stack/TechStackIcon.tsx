import type { IconType } from "react-icons";

export interface TechStackIconProperties {
  icon: IconType;
  tooltip: string;
}

function TechStackIcon({ icon: Icon, tooltip }: TechStackIconProperties) {
  return (
    <div className="tech-stack-icon group">
      <span className="tech-stack-icon-tooltip">{tooltip}</span>
      <Icon></Icon>
    </div>
  );
}

export default TechStackIcon;
