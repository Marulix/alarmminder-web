import { Stack } from "@mui/material"
import flechita from "../assets/flechita.png"
import Typography from "@mui/material/Typography"
import travel from "../assets/travel.png"
import Button from "@mui/material/Button"
import CardAlarma from "./CardAlarma"
import { useNavigate } from "react-router-dom"
import { urls } from "../urls"


export default function Grupo() {
  const parrafo1 = "Creé este grupo de alarmas para mi viaje a Cancún del 2016, pero me pareció muy útil y por eso lo comparto con todos ustedes. Espero que les sea tan útil como me fue a mí."
  const parrafo2 = "Siéntanse libres de modificar lo que quieran para adaptarlo a sus viajes y para que puedan disfrutar al máximo de todas sus vacaciones."
  const alarms = [
    {
      name: "Desayuno",
      hour: "8:30",
      time: "AM",
      color: "#C7FFB4",
    },
    {
      name: "Almuerzo",
      hour: "1:45",
      time: "PM",
      color: "#C7FFB4"
    },
    {
      name: "Cena",
      hour: "8:45",
      time: "PM",
      color: "#C7FFB4"
    },
    {
      name: "Skydiving",
      hour: "3:25",
      time: "PM",
      color: "#C7FFB4"
    }
  ];

  const justifyStyle = {
    textAlign: 'justify',
  };

  const buttonStyle = {
    bgcolor: '#00A896',
    borderRadius: '8px',
    textTransform: 'none',
    color: 'white'
  };

  const handleMouseEnter = () => {
    buttonStyle.color = "darkgray",
      buttonStyle.bgcolor = '#028090';
  };

  const handleMouseLeave = () => {
    buttonStyle.bgcolor = '#00A896';
  };

  const navigate = useNavigate();

  return (
    <Stack>
      <Stack width={"1366px"} height={"323px"} flexDirection={"row"} padding={"20px"} paddingTop={"60px"} gap={2}>
        <Stack paddingTop={"15px"}>
          <img src={flechita} alt="" width={"25px"} height={"25px"} onClick={() => {
            navigate(urls.home);
          }}></img>
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Typography variant="h3" fontSize={"45px"} fontWeight={"400"}>Viajes</Typography>
          <Typography variant="h6" fontSize={"15px"} fontWeight={"400"}>By Lavender</Typography>
          <Stack width={"218px"} height={"128px"} justifyContent={"center"} alignItems={"center"}>
            <img src={travel} alt="" height={"120px"} width={"120px"} />
          </Stack>
        </Stack>
        <Stack flexDirection={"column"} paddingX={"80px"} paddingRight={"120px"} alignItems={"flex-end"} gap={1}>
          <Typography variant="h6" fontSize={"20px"} fontWeight={"400"} sx={justifyStyle}>{parrafo1}</Typography>
          <Typography variant="h6" fontSize={"20px"} fontWeight={"400"} sx={justifyStyle}>{parrafo2}</Typography>
          <Stack width={"242px"} height={"52px"}>
            <Button variant="contained" sx={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => {
              navigate(urls.misAlarmas);
            }}>
              <Typography variant="h6" fontSize={"17px"} >
                Añadir a mis grupos
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack >
      <Stack flexDirection={"row"} gap={"113px"} padding={"70px"} width={"1366px"} flexWrap={"wrap"}>
        {alarms.map((alarm) => (
          <CardAlarma
            name={alarm.name}
            hour={alarm.hour}
            time={alarm.time}
            color={alarm.color}
          />
        ))}
      </Stack>

    </Stack>

  )
}
