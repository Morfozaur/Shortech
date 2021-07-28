import "../../scss/main.scss"
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
