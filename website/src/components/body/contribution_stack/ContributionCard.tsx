import type { ShieldImageProperties } from "../../shield/ShieldImage";
import ShieldImage from "../../shield/ShieldImage";

interface ContributionCardProperties {
  title: string;
  description: string;
  shieldImages: ShieldImageProperties[];
}

function ContributionCard({
  title,
  description,
  shieldImages,
}: ContributionCardProperties) {
  return (
    <div
      className="p-2 flex-shrink-0 d-flex flex-column justify-content-between rounded-4 bg-dark bg-gradient"
      style={{ width: "300px" }}
    >
      <h2 className="w-100 text-center ">{title}</h2>
      <p className="p-2 fs-5 flex-fill">{description}</p>
      <div className="p-2 d-flex flex-wrap justify-content-center gap-1 rounded-4 bg-dark bg-gradient">
        {shieldImages.map((shieldImage) => (
          <ShieldImage src={shieldImage.src} alt={shieldImage.alt} />
        ))}
      </div>
    </div>
  );
}

export default ContributionCard;
