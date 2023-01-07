import GlobalStyle from "./assets/styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

function App() {
  const user = JSON.parse(localStorage.getItem("linkr"));

  return (
    <BrowserRouter>
      <GlobalStyle />
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
