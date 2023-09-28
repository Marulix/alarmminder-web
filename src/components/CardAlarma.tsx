import { Stack, Typography } from "@mui/material";
import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../urls";

interface CardAlarmaProps {
  name: string;
  hour: string;
  time: string;
  color: string;
}

export default function CardGrupo(props: CardAlarmaProps) {
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection={"row"}
      flexWrap={"nowrap"}
      bgcolor={props.color}
      width={"300px"}
      height={"160px"}
      borderRadius={"20px"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      padding={"15px"}
      justifyContent={"space-around"}
      onClick={() => {
        navigate(urls.nuevaAlarma);
      }}
    >
      <Stack flexDirection={"column"} flexWrap={"nowrap"}>
        <Typography fontSize={"25pt"}>{props.name}</Typography>
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Typography fontSize={"45pt"}>{props.hour}</Typography>
          <Typography fontSize={"20pt"}>{props.time}</Typography>
        </Stack>
      </Stack>
      <Stack justifyContent={"center"}>
        <Switch defaultChecked />
      </Stack>
    </Stack>
  );
}
