import { FC } from "react";

// https://dev.to/
const LineDivider: FC = () => {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m2 11h6v2h-6z"></path>
        <path d="m2 11h6v2h-6z"></path>
        <path d="m9 11h6v2h-6z"></path>
        <path d="m16 11h6v2h-6z"></path>
        <g clipRule="evenodd" fillRule="evenodd">
          <path d="m12 6.58574-2.29288-2.29289-1.41421 1.41421 3.70709 3.70711 3.7071-3.70711-1.4142-1.41421z"></path>
          <path d="m12 17.4143-2.29288 2.2929-1.41421-1.4143 3.70709-3.7071 3.7071 3.7071-1.4142 1.4143z"></path>
        </g>
      </g>
    </svg>
  );
};

export default LineDivider;
