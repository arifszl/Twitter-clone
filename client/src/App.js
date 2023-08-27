import Register from "./components/sidebar/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/sidebar/Login";
import People from "./components/widgets/People";
import Follower from "./components/follower/Follower";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/following"
              element={<Follower />}
            />
            <Route
              path="/foryou"
              element={<Home />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
