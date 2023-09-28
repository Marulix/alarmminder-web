import { Stack } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { urls } from "./urls";
import Footer from "./components/Footer";
import Comunidad from "./components/Comunidad";
import Grupo from "./components/Grupo";
import HoraDeLevantarse from "./components/HoraDeLevantarse";
import MisAlarmas from "./components/MisAlarmas";
import NuevoGrupo from "./components/NuevoGrupo";
import NuevaAlarma from "./components/NuevaAlarma";

function App() {
  return (
    <>
      <Stack>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={urls.home} element={<Comunidad />} />
            <Route path={urls.misAlarmas} element={<MisAlarmas />} />
            <Route
              path={urls.horaDeLevantarse}
              element={<HoraDeLevantarse />}
            />
            <Route path={urls.grupo} element={<Grupo />} />
            <Route path={urls.nuevoGrupo} element={<NuevoGrupo />} />
            <Route path={urls.nuevaAlarma} element={<NuevaAlarma />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Stack>
    </>
  );
}

export default App;
