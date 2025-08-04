import ContributionCard from "./ContributionCard";
import {
  portfolioWebAppShields,
  gpsTrackerShields,
} from "../../shield/shields";

function ContributionStack() {
  return (
    <div className="d-flex flex-column gap-2">
      <h1 className="m-0 p-2">Contribution Stack</h1>
      <div className="p-3 d-flex overflow-auto gap-4">
        <ContributionCard
          title="Portfolio web app"
          description="A personal portfolio web application designed to showcase my projects, technical skills, and contributions. This site is built using modern web technologies and includes dynamic visualizations, interactive components, and data-driven elements."
          shieldImages={portfolioWebAppShields}
        />
        <ContributionCard
          title="GPS tracker"
          description="A GPS tracker built for fun. Assembled with Arduino and programmed with C++, captures satellite signal for longitute and latitude and forwards them to express.js server that serves HTML document to display location on Google Maps."
          shieldImages={gpsTrackerShields}
        />
      </div>
    </div>
  );
}

export default ContributionStack;
