interface Props {
  className?: string;
}

export default function Strip({ className }: Props) {
  return (
    <svg
      className={className}
      height="80px"
      preserveAspectRatio="none"
      viewBox="0 0 1280 140"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#51A655">
        <path
          d="M978.81 122.25L0 0h1280l-262.1 116.26a73.29 73.29 0 0 1-39.09 5.99z"
          fillOpacity=".5"
        />
        <path d="M983.19 95.23L0 0h1280l-266 91.52a72.58 72.58 0 0 1-30.81 3.71z" />
      </g>
    </svg>
  );
}
