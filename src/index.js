import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";
import FundoMobile from "./components/FundoMobile";
function App(){
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    )
}
const root = document.querySelector(".root");
ReactDOM.render(<App />, root);