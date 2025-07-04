interface CarouselIndicatorProperties {
  data_bs_target: string;
  data_bs_slide_to: string;
  active: boolean;
}

function CarouselIndicator({
  data_bs_target,
  data_bs_slide_to,
  active,
}: CarouselIndicatorProperties) {
  return (
    <button
      data-bs-target={data_bs_target}
      data-bs-slide-to={data_bs_slide_to}
      className={active ? "active" : ""}
    ></button>
  );
}

export default CarouselIndicator;
