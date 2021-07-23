import { Box } from "@chakra-ui/react";
import { Fragment, useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import WheelButton from "../../components/WheelButton";

const OFFSET = Math.random();

const map = function (value, in_min, in_max, out_min, out_max) {
  console.log(value);
  console.log(
    ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
  if (value === 0) {
    console.log("00000");
    return out_min;
  }
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default function Tacocaco() {
  const r = 200;
  const cx = 250;
  const cy = 250;
  const [power, setPower] = useState(0);
  const [acc, setAcc] = useState(0);
  const config = { mass: 50, tension: 200, friction: 200, precision: 0.001 };
  const [props, set] = useSpring(() => ({
    transform: "rotate(0deg)",
    immediate: false,
  }));

  useEffect(() => {
    set({
      from: { transform: `rotate(${map(acc, 0, 100, 0, 700)}deg)` },
      transform: `rotate(${map(acc + power, 0, 100, 0, 700)}deg)`,
      immediate: false,
      config,
    });
    setAcc(acc + power);
  }, [power]);

  const renderItems = (numOfItems) => {
    let items = [];
    for (let i = 0; i < numOfItems; i++) {
      let xLength = Math.cos(2 * Math.PI * (i / numOfItems + OFFSET)) * (r - 5);
      let yLength = Math.sin(2 * Math.PI * (i / numOfItems + OFFSET)) * (r - 5);
      let txLength =
        Math.cos(2 * Math.PI * ((i + 0.5) / numOfItems + OFFSET)) * (r / 2);
      let tyLength =
        Math.sin(2 * Math.PI * ((i + 0.5) / numOfItems + OFFSET)) * (r / 2);
      items.push(
        <Fragment key={i}>
          <line
            stroke="rgb(255,0,0)"
            strokeWidth="2"
            x1={cx + xLength}
            y1={cy + yLength}
            x2={cx}
            y2={cy}
          />
          <text
            x={cx + txLength}
            y={cy + tyLength}
            fontSize="15px"
            transform={`rotate(${((i + 0.5) / numOfItems + OFFSET) * 360} 
                    ${cx + txLength},
                    ${cy + tyLength})`}
          >
            {i}
          </text>
        </Fragment>
      );
    }
    return items;
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        style={{ width: "100vw", height: "80vh" }}
      >
        <g fill="white" stroke="green" strokeWidth="10">
          <circle cx="250" cy="250" r={r} />
        </g>
        <animated.g
          style={{
            transform: props.transform,
            transformOrigin: "center",
          }}
        >
          {renderItems(12)}
        </animated.g>
        <g fill="#61DAFB">
          <circle cx="250" cy="250" r="15" />
        </g>
        <g fill="black">
          <circle cx="250" cy="250" r="5" />
        </g>
        <g fill="lime" stroke="purple" strokeWidth="2">
          <polygon points="250,70 230,30 270,30" />
        </g>
      </svg>
      <WheelButton setPower={setPower} style={{ height: "20vh" }} />
    </div>
  );
}
