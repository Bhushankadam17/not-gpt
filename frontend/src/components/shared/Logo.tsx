import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai"
          width={"40px"}
          height={"40px"}
          className="image-inverted"
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          fontSize:"30px",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "40px" }}>NOT</span>-GPT
      </Typography>
    </div>
  );
};

export default Logo;
