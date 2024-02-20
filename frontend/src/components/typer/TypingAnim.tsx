import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "I'm Notgpt👋 definitely not chatgpt.",
        1000,
        "I'm a chatbot built on top of gpt 3.5",
        1000,
        "I'm highly scalable and secure",
        1000,
      ]}
      speed={50}
      style={{
        fontSize: "70px",
        color: "Black",
        display: "inline-block",
        marginTop:"40px",
        fontWeight: "600px"
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
