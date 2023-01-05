import GlobalStyle from "./assets/styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import { useContext } from "react";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

function App() {
  const { auth, setAuth } = useContext(AuthContext);
  const getToken = JSON.parse(localStorage.getItem("linkr"));
  
  if(getToken) {
    setAuth(true);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
