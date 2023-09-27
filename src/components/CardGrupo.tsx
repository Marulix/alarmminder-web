import { Stack, Typography } from "@mui/material";
import { urls } from "../urls";
import { useNavigate } from "react-router-dom";

interface CardGrupoProps {
  img: string;
  group_name: string;
  group_creator: string;
  color: string;
}

export default function CardGrupo(props: CardGrupoProps) {
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection={"column"}
      bgcolor={props.color}
      width={"225px"}
      height={"315px"}
      borderRadius={"20px"}
      alignItems={"left"}
      px={"20px"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      onClick={() => {
        navigate(urls.grupo);
      }}
    >
      <Stack height={"200px"} justifyContent={"center"} alignItems={"center"}>
        <img width={"150px"} src={props.img} alt={props.group_name} />
      </Stack>
      <Typography fontSize={25} fontWeight={520}>
        {props.group_name}
      </Typography>
      <Typography fontSize={18}>By {props.group_creator}</Typography>
    </Stack>
  );
}
