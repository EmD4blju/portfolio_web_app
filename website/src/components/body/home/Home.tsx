import Carousel from "./Carousel";

interface HomeProperties {}

function Home() {
  return (
    <div className="rounded-3 d-flex flex-column gap-2">
      <h1 className="m-0 p-2">Home</h1>
      <Carousel />
    </div>
  );
}

export default Home;
