export const LoadingSVG = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={900}
      height={600}
      preserveAspectRatio="xMidYMid"
      style={{
        margin: "auto",
        background: "#000",
        display: "block",
        shapeRendering: "auto",
        borderRadius: "24px",
      }}
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        fill="none"
        stroke="#fff"
        strokeDasharray="42.76482137044271 42.76482137044271"
        strokeLinecap="round"
        strokeWidth={8}
        d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20c-19.3 0-32.1-40-51.4-40z"
        style={{
          transform: "scale(.8)",
          transformOrigin: "50px 50px",
        }}
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="1.923076923076923s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;256.58892822265625"
        />
      </path>
    </svg>
  );
};
