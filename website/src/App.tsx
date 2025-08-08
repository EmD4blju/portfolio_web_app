import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="flex flex-col bg-neutral-800 min-h-dvh">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
