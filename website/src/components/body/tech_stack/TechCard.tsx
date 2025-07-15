import ConfidenceBar from "./ConfidenceBar";
import ShieldImage, { type ShieldImageProperties } from "./ShieldImage";
import "../../../custom_styles/styles.css";

interface TechCardProperties {
  heading: string;
  imgPath: string;
  level: number;
  shieldImages: ShieldImageProperties[];
}

function TechCard({
  heading,
  imgPath,
  level,
  shieldImages,
}: TechCardProperties) {
  return (
    <div className="p-3 w-600px d-flex flex-wrap flex-md-nowrap justify-content-center rounded-4 bg-dark bg-gradient">
      <img
        src={imgPath}
        alt="image"
        className="align-self-center"
        width={150}
        height={150}
      />
      <div className="flex-fill d-flex flex-column">
        <div className="p-3 flex-fill d-flex flex-wrap justify-content-center align-items-center gap-1">
          {shieldImages.map((shieldImage) => (
            <ShieldImage src={shieldImage.src} alt={shieldImage.alt} />
          ))}
        </div>
        <ConfidenceBar level={level} />
      </div>
    </div>
  );
}

export default TechCard;
