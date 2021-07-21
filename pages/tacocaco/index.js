import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import { animated, useSpring } from "react-spring";

import WheelButton from "../../components/WheelButton";

const OFFSET = Math.random();
export default function Tacocaco() {
  const r = 200;
  const cx = 250;
  const cy = 250;
  const rederItems = (numOfItems) => {
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
        <g>{rederItems(12)}</g>
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
      <WheelButton />
    </div>
  );
}
