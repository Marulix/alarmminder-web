import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../urls";
import flechita from "../assets/flechita.png";

export default function NuevoGrupo() {
  const colorCircles = [
    {
      color: "#FF9F9F",
    },
    {
      color: "#FFC896",
    },
    {
      color: "#F0F3BD",
    },
    {
      color: "#C7FFB4",
    },
    {
      color: "#A4FFE9",
    },
    {
      color: "#9795FF",
    },
    {
      color: "#CCA4FF",
    },
  ];
  const navigate = useNavigate();

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
    <Stack gap={"80px"}>
      <Stack flexDirection={"row"} padding={"20px"} paddingTop={"60px"} gap={2}>
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
        <Stack flexDirection={"column"} gap={3}>
          <Typography variant="h3" fontSize={"45px"} fontWeight={"400"}>
            Nuevo Grupo de Alarmas
          </Typography>
          <Typography fontWeight={520} fontSize={"25px"}>
            Bienvenid@, aquí puedes crear un grupo para organizar tus alarmas!
          </Typography>
          <Stack
            flexDirection={"row"}
            gap={30}
            height={"35px"}
            justifyContent={"space-between"}
            width={"90vw"}
            alignItems={"end"}
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
                  width: "60vw",
                  borderRadius: "8px",
                },
              }}
            ></TextField>
          </Stack>
          <Stack direction={"row"}>
            <Typography fontSize={"30px"}>Color</Typography>
          </Stack>
          <Stack
            direction="row"
            py={"50px"}
            justifyContent="space-between"
            width={"900px"}
            ml={"15vw"}
          >
            {colorCircles.map((color) => (
              <Stack
                key={color.color}
                width={"50px"}
                height={"50px"}
                borderRadius={"50%"}
                bgcolor={color.color}
                justifyContent={"center"}
                alignItems={"center"}
              ></Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack px={"40px"} py={"10px"} direction="row-reverse">
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
