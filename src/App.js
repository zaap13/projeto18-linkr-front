import GlobalStyle from "./assets/styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import { useContext, useEffect } from "react";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

function App() {
  const { auth, setAuth } = useContext(AuthContext);
  console.log(auth)

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("linkr"));
    console.log(getToken)
    if (getToken) {
      setAuth(true);
    };
  }, [auth]);


  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <PrivateRoutes /> */}
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
