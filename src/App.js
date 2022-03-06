import { Routes, Route} from "react-router-dom";
import Home from "../src/component/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return(
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    )
}