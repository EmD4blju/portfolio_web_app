interface HomeCardProperties {
  heading: string;
  description: string;
  imgPath: string;
}

function HomeCard({ heading, description, imgPath }: HomeCardProperties) {
  return (
    <div className="flex flex-col gap-5 mx-10 bg-neutral-700 shadow-md/80 p-5 rounded-3xl">
      <h2 className="text-xl self-center font-medium">{heading}</h2>
      <div className="flex flex-wrap gap-10">
        <img src={imgPath} alt="Card icon" className="w-50 hidden sm:block" />
        <span className="self-center w-40 flex-auto">{description}</span>
      </div>
    </div>
  );
}

export default HomeCard;
