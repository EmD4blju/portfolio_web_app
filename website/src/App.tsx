import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="container-fluid bg-dark bg-gradient min-vh-100 text-light d-flex flex-column justify-content-between gap-2">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
