import { BrowserRouter, Routes as RoutesWrapper, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Vinicola from "./pages/Vinicola";
import Vinhos from "./pages/Vinhos";
import DetalheVinho from "./pages/DetalheVinho";
import NossosVinhos from "./pages/NossosVinhos";
import FiltroTipo from "./pages/Filtro-Tipo";
import PopUpIdade from "./pages/Pop-up-Idade";
import MenorIdade from "./pages/Pop-up-Idade/menorIdade";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<PopUpIdade />} />
        <Route path="/aviso-idade" element={<MenorIdade />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/vinicola" element={<Vinicola />} />
        <Route path="/nossos-vinhos" element={<NossosVinhos />} />
        <Route path="/nossos-vinhos/todos" element={<Vinhos />} />
        <Route path="/nossos-vinhos/:tipo" element={<FiltroTipo />} />
        <Route path="/vinho/:id" element={<DetalheVinho />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes;
