import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../urls";
import dias from "../assets/dias.png";
import flechita from "../assets/flechita.png";
import { useState } from "react";

export default function NuevaAlarma() {
  const navigate = useNavigate();
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
    <Stack gap={"100px"}>
      <Stack
        flexDirection={"row"}
        padding={"20px"}
        paddingTop={"60px"}
        gap={2}
        justifyContent={"space-around"}
      >
        <Stack paddingTop={"15px"}>
          <img
            src={flechita}
            alt=""
            width={"25px"}
            height={"25px"}
            onClick={() => {
              navigate(urls.misAlarmas);
            }}
          ></img>
        </Stack>
        <Typography
          variant="h3"
          fontSize={"45px"}
          fontWeight={"400"}
          color="#028090"
        >
          7:30 a.m.
        </Typography>
        <Stack>
          <img
            src={dias}
            alt=""
            width={"750px"}
            height={"80px"}
            onClick={() => {
              navigate(urls.grupo);
            }}
          ></img>
        </Stack>
      </Stack>

      <Stack
        flexDirection={"row"}
        height={"35px"}
        justifyContent={"space-between"}
        width={"70vw"}
        alignItems={"end"}
        ml={20}
      >
        <Typography fontSize={"30px"}>Repetir</Typography>
        <Switch />
      </Stack>

      <Stack
        flexDirection={"row"}
        height={"35px"}
        justifyContent={"space-between"}
        width={"70vw"}
        alignItems={"end"}
        ml={20}
      >
        <Typography fontSize={"30px"}>Tono</Typography>
        <Stack direction="row" gap={1} alignItems={"center"}>
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Seleccione
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={tono}
              onChange={(event) => {
                setTono(event.target.value as string);
              }}
              fullWidth
              label="Seleccione"
              placeholder="Seleccione"
            >
              <MenuItem value={"Birds"}>Birds</MenuItem>
              <MenuItem value={"Rise and Shine"}>Rise and Shine</MenuItem>
              <MenuItem value={"Bells"}>Bells</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        height={"35px"}
        justifyContent={"space-between"}
        width={"70vw"}
        alignItems={"end"}
        ml={20}
      >
        <Typography fontSize={"30px"}>Vibrar</Typography>
        <Switch />
      </Stack>
      <Stack
        flexDirection={"row"}
        gap={30}
        height={"35px"}
        justifyContent={"space-between"}
        width={"90vw"}
        alignItems={"end"}
        ml={20}
      >
        <Typography fontSize={"30px"}>Nombre</Typography>
        <TextField
          fullWidth={true}
          InputProps={{
            disableUnderline: true,
            style: {
              color: "#1B1D1F",
              backgroundColor: "white",
              height: "30px",
              width: "50vw",
              borderRadius: "8px",
            },
          }}
        ></TextField>
      </Stack>
      <Stack
        direction="row"
        gap={"100px"}
        ml={20}
        justifyContent={"space-between"}
      >
        <Typography fontSize={"30px"}>Posponer cada</Typography>
        <Stack flexDirection={"row"} gap={1} mr={50}>
          <input type="number" style={{ width: "41px", height: "41px" }} />
          <Typography fontSize={"30px"}>minutos</Typography>
        </Stack>
      </Stack>
      <Stack px={10} py={"10px"} direction="row-reverse">
        <Stack width={"242px"} height={"52px"}>
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
  );
}
