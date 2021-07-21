import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Button } from "@chakra-ui/react";

export default function WheelButton() {
  const [pressed, toggle] = useState(false);
  const [props, set] = useSpring(() => ({
    width: "0%",
    backgroundColor: "hotpink",
  }));
  useEffect(() => {
    if (pressed)
      set({
        from: { width: "0%", backgroundColor: "hotpink" },
        to: { width: "100%", backgroundColor: "red" },
        immediate: false,
        config: { duration: 2000 },
      });
    else {
      set({ to: { width: "0%", backgroundColor: "hotpink" }, immediate: true });
    }
  }, [pressed]);

  return (
    <Button
      className="main"
      pos="relative"
      w="200px"
      h="50px"
      background="black"
      color="white"
      _hover={{ cursor: "pointer" }}
      borderRadius="5px"
      border="2px solid white"
      overflow="hidden"
      onClick={() => {
        toggle(!pressed);
      }}
    >
      <animated.div
        className="fill"
        style={{
          width: props.width,
          background: "blue",
        }}
      />
      <animated.div className="content">
        {props.width.to((x) => {
          return x === "0%" ? "Press me!" : parseInt(x) + "%";
        })}
      </animated.div>
    </Button>
  );
}
