import ConfidenceBar from "./ConfidenceBar";
import ShieldImage, { type ShieldImageProperties } from "./ShieldImage";

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
    <div className="p-3 w-25 d-flex flex-column flex-wrap flex-md-nowrap justify-content-center border ">
      <h1 className="text-center">{heading}</h1>
      <div className="d-flex">
        <img src={imgPath} alt="image" className="" width={200} height={200} />
        <div className="flex-fill d-flex flex-column justify-content-between">
          <div className="p-1 d-flex flex-wrap justify-content-center align-items-center gap-1 ">
            {shieldImages.map((shieldImage) => (
              <ShieldImage src={shieldImage.src} alt={shieldImage.alt} />
            ))}
          </div>
          <ConfidenceBar level={level} />
        </div>
      </div>
    </div>
  );
}

export default TechCard;
