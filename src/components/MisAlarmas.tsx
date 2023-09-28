import { Fab, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { urls } from "../urls";
import { useNavigate } from "react-router-dom";
import flechita from "../assets/flechita.png";
import CardHoraLevantarse from "./CardHoraLevantarse";
import CardGrupo from "./CardGrupo";
import reminder from "../assets/reminder.png";
import travel from "../assets/travel.png";
import pills from "../assets/pills.png";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export default function MisAlarmas() {
  const images = [
    {
      name: "Recordatorios",
      user: "User",
      image: reminder,
      color: "#FFC896",
    },
    {
      name: "Medicinas",
      user: "User",
      image: pills,
      color: "rgba(5, 102, 141, 0.5)",
    },
    {
      name: "Viajes",
      user: "Lavender",
      image: travel,
      color: "#C7FFB4",
    },
  ];

  const navigate = useNavigate();

  const buttonStyle = {
    bgcolor: "rgba(2,128,144,0.5)",
    borderRadius: "25px",
    textTransform: "none",
    color: "black",
  };

  const handleMouseEnter = () => {
    (buttonStyle.color = "darkgray"), (buttonStyle.bgcolor = "#028090");
  };

  const handleMouseLeave = () => {
    buttonStyle.bgcolor = "#00A896";
  };

  const [buttonsVisible, setButtonsVisible] = useState(false);

  return (
    <Stack gap={"10px"}>
      <Stack flexDirection={"row"}>
        <Stack
          width={"1366px"}
          height={"323px"}
          flexDirection={"row"}
          padding={"20px"}
          paddingTop={"60px"}
          gap={2}
        >
          <Stack paddingTop={"15px"}>
            <img
              src={flechita}
              alt=""
              width={"25px"}
              height={"25px"}
              onClick={() => {
                navigate(urls.home);
              }}
            ></img>
          </Stack>
          <Stack flexDirection={"column"} gap={2}>
            <Typography variant="h3" fontSize={"45px"} fontWeight={"400"}>
              Mis Alarmas
            </Typography>
            <CardHoraLevantarse
              name="Hora de Despertarse"
              hour="8:00"
              time="AM"
              color={"rgba(2,128,144,0.5)"}
            ></CardHoraLevantarse>
          </Stack>
        </Stack>
      </Stack>
      <Typography fontFamily={"20px"} ml={"50px"}>
        Mis grupos de Alarmas
      </Typography>

      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Stack
          flexDirection={"row"}
          height={"364px"}
          width={"857px"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          gap={"20px"}
        >
          {images.map((image) => (
            <CardGrupo
              img={image.image}
              group_name={image.name}
              group_creator={image.user}
              color={image.color}
            />
          ))}
        </Stack>
        <Stack
          flexDirection={"column"}
          gap={1}
          width={"134px"}
          justifyContent={"end"}
          padding={"20px"}
        >
          {buttonsVisible && (
            <>
              <Button
                variant="contained"
                sx={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => navigate(urls.nuevoGrupo)}
              >
                Grupo
              </Button>
              <Button
                variant="contained"
                sx={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => navigate(urls.nuevaAlarma)}
              >
                Alarma
              </Button>
            </>
          )}
          <Stack alignItems={"flex-end"}>
            <Fab
              onClick={() => setButtonsVisible(!buttonsVisible)}
              size="large"
              color="primary"
            >
              <AddIcon />
            </Fab>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
