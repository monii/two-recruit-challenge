import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Container from "./components/container/Container";
import Home from "./page/home/Home";
import Order from "./page/order/Order";
import Complete from "./page/complete/Complete";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/complete" element={<Complete />} />
          </Routes>
        </Container>
      </div>
    </QueryClientProvider>
  );
}

export default App;
