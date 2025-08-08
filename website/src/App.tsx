import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="bg-black text-light d-flex flex-column justify-content-between">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
