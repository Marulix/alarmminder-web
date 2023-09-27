import { Stack, Typography } from "@mui/material";
import chica from "../assets/chica.png";
import travel from "../assets/travel.png";
import study from "../assets/study.png";
import gym from "../assets/gym.png";
import pomodoro from "../assets/pomodoro.png";
import CardGrupo from "./CardGrupo";

const linearGradientStyle = {
  color: "white",
  backgroundImage:
    "linear-gradient(rgba(193, 227, 210, 1), rgba(156, 209, 181, 1))",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const images = [
  {
    name: "Viajes",
    user: "Lavender",
    image: travel,
    color: "#C7FFB4",
  },
  {
    name: "Estudio",
    user: "JoseM",
    image: study,
    color: "#F0F3BD",
  },
  {
    name: "Pomodoro",
    user: "User",
    image: pomodoro,
    color: "#02809040",
  },
  {
    name: "Gimnasio",
    user: "User",
    image: gym,
    color: "#FF9F9F",
  },
];

export default function Comunidad() {
  return (
    <Stack>
      <Stack
        direction="row"
        height={"488px"}
        sx={linearGradientStyle}
        alignItems={"end"}
      >
        <Stack width={"570px"} px={"65px"} py={"89px"}>
          <Typography fontWeight={400} fontSize={45} color={"black"}>
            Grupos de Alarmas Populares
          </Typography>
          <Typography color={"black"} mt={"38px"}>
            Aquí encontrarás grupos de alarmas compartidos por otros usuarios
          </Typography>
        </Stack>
        <Stack>
          <img src={chica} width={"576px"} alt="" />
        </Stack>
      </Stack>

      <Stack
        flexDirection={"row"}
        height={"486px"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
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
    </Stack>
  );
}
