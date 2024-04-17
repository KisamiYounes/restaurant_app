import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin, Signup} from "../component/index";
const Main = () => {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/Signin" element={<Signin />} exact>
            {" "}
          </Route>
          <Route path="/Signup" element={<Signup />} exact>
            {" "}
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
};

export default Main;
