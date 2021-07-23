export default function Tacocaco() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        style={{ width: "100vw", height: "80vh" }}
      >
        <g fill="white" stroke="green" strokeWidth="10">
          <circle cx="250" cy="250" r="15" />
        </g>

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
    </div>
  );
}
