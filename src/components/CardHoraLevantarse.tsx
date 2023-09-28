import { Stack, Typography } from "@mui/material";
import { Switch } from "@mui/material";
import despertar from "../assets/despertar.png";
import { useNavigate } from "react-router-dom";
import { urls } from "../urls";

interface CardAlarmaProps {
  name: string;
  hour: string;
  time: string;
  color: string;
}

export default function CardHoraLevantarse(props: CardAlarmaProps) {
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection={"row"}
      bgcolor={props.color}
      width={"600px"}
      height={"160px"}
      borderRadius={"20px"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      padding={"15px"}
      justifyContent={"space-around"}
    >
      <Stack
        flexDirection={"column"}
        flexWrap={"nowrap"}
        onClick={() => {
          navigate(urls.horaDeLevantarse);
        }}
      >
        <Typography fontSize={"20pt"}>{props.name}</Typography>
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Typography fontSize={"60pt"}>{props.hour}</Typography>
          <Typography fontSize={"32pt"}>{props.time}</Typography>
        </Stack>
      </Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        padding={"10px"}
        gap={"30px"}
      >
        <img
          onClick={() => {
            navigate(urls.horaDeLevantarse);
          }}
          src={despertar}
          alt=""
          width={"155px"}
          height={"120px"}
        ></img>
        <Switch defaultChecked />
      </Stack>
    </Stack>
  );
}
