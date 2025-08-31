import CertificationCard from "./CertificationCard";
import gcpFoundationBadge from "@assets/google-cloud-computing-foundations-certificate.png";
import rhFoundationBadge from "@assets/2025-red-hat-academy-program-learner.png";

function CertificationStack() {
  return (
    <div id="certification-stack" className="certification-stack">
      <h2 className="certification-stack-header">Certifications</h2>
      <CertificationCard
        title="Google Cloud Computing Foundations Certificate"
        description="This certificate program helps learners develop technical proficiency in cloud computing. This certificate is an ideal foundation for diverse career paths including those in IT infrastructure, cloud engineering, and cloud-native application development."
        badge={gcpFoundationBadge}
      />

      <CertificationCard
        title="2025 Red Hat Academy - Program Learner"
        description="Earners of this badge actively engaged with Red Hat course content and practiced hands-on labs on the Red Hat Academy Learning Platform. These students have developed a solid foundation in Red Hat technologies, setting the stage for continued growth in the tech field."
        badge={rhFoundationBadge}
      />
    </div>
  );
}

export default CertificationStack;
