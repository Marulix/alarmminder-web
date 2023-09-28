import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import flechita from "../assets/flechita.png";
import { useNavigate } from "react-router-dom";
import { urls } from "../urls";
import { useState } from "react";
import clockCounter from "../assets/clockCounter.png";
import despertar from "../assets/despertar.png";

export default function HoraDeLevantarse() {
  const navigate = useNavigate();

  const [dia, setDia] = useState("");
  const [tono, setTono] = useState("");

  const buttonStyle = {
    bgcolor: "#00A896",
    borderRadius: "8px",
    textTransform: "none",
    color: "white",
  };

  const handleMouseEnter = () => {
    (buttonStyle.color = "darkgray"), (buttonStyle.bgcolor = "#028090");
  };

  const handleMouseLeave = () => {
    buttonStyle.bgcolor = "#00A896";
  };
  return (
    <Stack pt={"75px"} pl={"20px"}>
      <Stack pl={"40px"} gap={2}>
        <Stack direction={"row"} justifyContent={"space-between"} pr={4}>
          <Box display="flex" flexDirection="column">
            <Stack direction="row" gap={2} alignItems={"center"} ml={"-40px"}>
              <img
                src={flechita}
                alt=""
                width={"25px"}
                height={"25px"}
                onClick={() => {
                  navigate(urls.home);
                }}
              />
              <Typography fontSize={"45px"}>Hora de levantarse</Typography>
            </Stack>
            <Stack direction="row" gap={8}>
              <Typography fontSize={"30px"}>
                {" "}
                Misma hora todos los días
              </Typography>
              <Switch defaultChecked />
            </Stack>
            <Stack direction="row" gap={1} alignItems={"center"}>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Día de la semana
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={dia}
                  onChange={(event) => {
                    setDia(event.target.value as string);
                  }}
                  fullWidth
                  label="Día de la semana"
                  placeholder="Día de la semana"
                >
                  <MenuItem value={"Lunes"}>Lunes</MenuItem>
                  <MenuItem value={"Martes"}>Martes</MenuItem>
                  <MenuItem value={"Miércoles"}>Miércoles</MenuItem>
                  <MenuItem value={"Jueves"}>Jueves</MenuItem>
                  <MenuItem value={"Viernes"}>Viernes</MenuItem>
                  <MenuItem value={"Sábado"}>Sábado</MenuItem>
                  <MenuItem value={"Domingo"}>Domingo</MenuItem>
                </Select>
              </FormControl>
              <Typography>
                Cada selección le permitirá configurar la hora de cada día
              </Typography>
            </Stack>
          </Box>
          <Box>
            <img src={despertar} alt="" width={"251px"} />
          </Box>
        </Stack>
        <Stack direction="row">
          <img src={clockCounter} alt="" />
        </Stack>
        <Stack direction="row" gap={"100px"}>
          <Typography fontSize={"30px"}>Posponer cada</Typography>
          <input type="number" style={{ width: "41px", height: "41px" }} />
          <Typography fontSize={"30px"}>minutos</Typography>
        </Stack>
        <Stack width={"700px"}>
          <Divider></Divider>
        </Stack>
        <Stack direction="row" gap={"210px"}>
          <Typography fontSize={"30px"}>Tono</Typography>
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Seleccione
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              fullWidth
              label="Día de la semana"
              placeholder="Día de la semana"
              value={tono}
              onChange={(event) => {
                setTono(event.target.value as string);
              }}
            >
              <MenuItem value={"Birds"}>Birds</MenuItem>
              <MenuItem value={"Rise and Shine"}>Rise and Shine</MenuItem>
              <MenuItem value={"Bells"}>Bells</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack width={"700px"}>
          <Divider></Divider>
        </Stack>
        <Stack direction="row" gap={"450px"}>
          <Typography fontSize={"30px"}> Vibrar</Typography>
          <Switch defaultChecked />
        </Stack>
        <Stack width={"700px"}>
          <Divider></Divider>
        </Stack>

        <Stack
          direction="row"
          mb={3}
          justifyContent={"space-between"}
          pr={4}
          alignItems={"flex-end"}
        >
          <Stack direction={"row"} gap={"60px"} alignItems="center">
            <Typography fontSize={"30px"}> Mensaje</Typography>
            <TextField
              fullWidth={true}
              InputProps={{
                disableUnderline: true,
                style: {
                  color: "#1B1D1F",
                  backgroundColor: "white",
                  height: "35px",
                  width: "400px",
                  borderRadius: "8px",
                },
              }}
            />
          </Stack>
          <Stack width={"242px"} height={"52px"} alignItems={"flex-end"}>
            <Button
              variant="contained"
              sx={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate(urls.misAlarmas)}
              fullWidth={true}
            >
              Guardar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
