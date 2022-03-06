import { Routes, Route} from "react-router-dom";
import Home from "../src/component/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from "../src/component/FavList /FavList ";

export default function App() {
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addMovie" element={<FavList />} />
      </Routes>
    )
}