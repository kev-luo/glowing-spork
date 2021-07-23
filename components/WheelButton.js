import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Button } from "@chakra-ui/react";

export default function WheelButton({ setPower }) {
  const [pressed, toggle] = useState(false);
  const [width, setWidth] = useState(0);
  const [styles, set] = useSpring(() => ({
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
      setPower(parseInt(width));
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
      <animated.div className="fill" style={styles} />
      <animated.div className="content">
        {props.width.to((x) => {
          {
            /* setWidth(parseInt(x)); */
          }
          return x === "0%" ? "Press me!" : parseInt(x) + "%";
        })}
      </animated.div>
    </Button>
  );
}
