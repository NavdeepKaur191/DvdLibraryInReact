import "./App.css";
import MainPage from "./MainPage";
import {Route,Routes} from 'react-router-dom';
import DvdDetail from "./DvdDetail";
import EditDvd from "./EditDvd";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/dvd/:dvdId" element={<DvdDetail/>}/>
      <Route path="/editDvd/:dvdId" element={<EditDvd/>}/>
    </Routes>
    
    </>
  );
}

export default App;
