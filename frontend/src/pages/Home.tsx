import { Box, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";
import NavigationLink from "../components/shared/NavigationLink";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
  
        <Box sx={{ display: "flex", mx: "auto" }}>
          <p
            style={{
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
              fontSize: 30,
              textAlign: "center",
              color:"#48576b"
              
            }}
          ><span>Bhushan</span> built me. He is an amazing web developer with creative solutions to all the problems. <br />He is new in tech but loves what he does.</p>
        </Box>
        <NavigationLink
                bg="#3d5cb8"
                to="https://bhushank.vercel.app/"
                text="Meet Bhushan"
                textColor="White"
              />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
