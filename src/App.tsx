import { Route, Routes } from "react-router-dom";

import Container from "./components/container/Container";
import Home from "./page/home/Home";
import Order from "./page/order/Order";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
