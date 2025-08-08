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
    <div className="">
      <h2 className="">{title}</h2>
      <p className="">{description}</p>
      <div className="">
        {shieldImages.map((shieldImage) => (
          <ShieldImage src={shieldImage.src} alt={shieldImage.alt} />
        ))}
      </div>
    </div>
  );
}

export default ContributionCard;
