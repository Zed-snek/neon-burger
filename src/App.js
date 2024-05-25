import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import './style/main.css';
import Header from "./components/header/Header";
import AllRoutes from "./routing/AllRoutes";
import {Container} from "react-bootstrap";
import Footer from "./components/footer/Footer";
import MainContextComponent from "./context/MainContextComponent";
function App() {
  return (
    <div className="App">
        <MainContextComponent>
            <Header />

            <Container style={{maxWidth: "960px"}}>
                <AllRoutes />
            </Container>

            <Footer />
        </MainContextComponent>
    </div>
  );
}

export default App;
