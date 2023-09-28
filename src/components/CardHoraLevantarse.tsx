import { Stack, Typography } from "@mui/material";
import { Switch } from "@mui/material";
import despertar from "../assets/despertar.png";

interface CardAlarmaProps {
    name: string;
    hour: string;
    time: string;
    color: string;
}

export default function CardHoraLevantarse(props: CardAlarmaProps) {
    return (
        <Stack
            flexDirection={"row"}
            flexWrap={"nowrap"}
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
            >
                <Typography fontSize={"20pt"}>{props.name}</Typography>
                <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                    <Typography fontSize={"60pt"}>{props.hour}</Typography>
                    <Typography fontSize={"32pt"}>{props.time}</Typography>

                </Stack>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} flexDirection={"row"} padding={"10px"}>
                <img src={despertar} alt="" width={"150px"} height={"150px"}></img>
                <Switch defaultChecked />
            </Stack>
        </Stack>
    );
}