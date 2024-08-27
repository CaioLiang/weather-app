import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home/Home")) //Serve como variavel para Router
const LazySearch = lazy(() => import("./pages/Search/Search"))
const LazyProfile = lazy(() => import("./pages/Profile/Profile"))
function App() {
  return(
    <BrowserRouter>
    <Suspense fallback={<>Carregando</>}>
      <Routes>
        <Route path="/" element = {<LazyHome/>}/>
        <Route path="/busca" element = {<LazySearch/>}/>
        <Route path="/perfil" element = {<LazyProfile/>}/>

    </Routes>
    </Suspense>
  </BrowserRouter>
  //controla as rotas do navegador  
  //sempre desse formato
);
}

export default App;
