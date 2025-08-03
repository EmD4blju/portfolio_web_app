import ContributionCard from "./ContributionCard";

function ContributionStack() {
  return (
    <div className="d-flex flex-column gap-2">
      <h1 className="m-0 p-2">Contribution Stack</h1>
      <div className="w-75 d-flex flex-nowrap justify-content-evenly gap-5 border align-self-center p-2">
        <ContributionCard />
        <ContributionCard />
        <ContributionCard />
      </div>
    </div>
  );
}

export default ContributionStack;
