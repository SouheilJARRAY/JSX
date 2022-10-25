import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavbarExample from './Component/NavbarExample';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'

function App() {
  return (
    <BrowserRouter>

      <NavbarExample />
      <Routes>
                    <Route exact path="/ProfilePhoto" element={<ProfilePhoto />} />
                    <Route exact path="/FullName" element={<FullName />} />
                    <Route exact path="/Address" element={<Address />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
