import "./App.css";
import data from "./assets/Json/data.json";
import MainContent from "./components/Main/MainContent";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <MainContent className="container" data={data} />
    </>
  );
}

export default App;
