import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { urls } from "../urls";
import { useNavigate } from "react-router-dom";
import flechita from "../assets/flechita.png";
import CardHoraLevantarse from "./CardHoraLevantarse";


export default function MisAlarmas() {
  const navigate = useNavigate();
  return (
    <Stack flexDirection={"row"}>
      <Stack width={"1366px"} height={"323px"} flexDirection={"row"} padding={"20px"} paddingTop={"60px"} gap={2}>
        <Stack paddingTop={"15px"}>
          <img src={flechita} alt="" width={"25px"} height={"25px"} onClick={() => {
            navigate(urls.home);
          }}></img>
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Typography variant="h3" fontSize={"45px"} fontWeight={"400"}>Mis Alarmas</Typography>
          <CardHoraLevantarse name="Hora de Despertarse" hour="8:00" time="AM" color="#028090"></CardHoraLevantarse>

        </Stack>
      </Stack>
    </Stack>
  )
}
