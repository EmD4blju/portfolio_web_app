import profile from "@assets/profile.jpg";

export interface HomeCardProperties {}

function HomeCard() {
  return (
    <div className="home-card">
      <img src={profile} alt="" className="home-profile max-sm:hidden" />
      <p className="home-card-description max-md:text-sm">
        AI/ML-focused dev building intelligent systems.
      </p>
    </div>
  );
}

export default HomeCard;
