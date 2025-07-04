interface CarsouelCardProperties {
  heading: string;
  description: string;
  imgPath: string;
}

function CarouselCard({
  heading,
  description,
  imgPath,
}: CarsouelCardProperties) {
  return (
    <div className="p-3 d-flex flex-wrap flex-column flex-md-nowrap justify-content-center gap-3">
      <h2 className="p-3 flex-fill text-center">{heading}</h2>
      <div className="d-flex gap-5 p-3">
        <img
          src={imgPath}
          alt="Card icon"
          className="d-none d-lg-block"
          width={400}
          height={300}
        />
        <span className="p-2 flex-fill align-self-center">{description}</span>
      </div>
    </div>
  );
}

export default CarouselCard;
