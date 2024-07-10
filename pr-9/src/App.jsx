import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addnote from "./Pages/addnote";
import ViewNote from "./Pages/viewnote";
function App() {
return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addnote/>}/>
          <Route path="/view" element={<ViewNote/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App