export default function Logo({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill="#4BB7FD"
        d="M9.256 15.763L26.78 4.768c3.317-2.08 7.62.312 7.62 4.237v21.99c0 3.925-4.303 6.318-7.62 4.237L9.256 24.237c-3.12-1.957-3.12-6.517 0-8.474z"
      ></path>
      <path
        fill="#7B6EF6"
        d="M30.744 15.763L13.22 4.768C9.903 2.688 5.6 5.08 5.6 9.005v21.99c0 3.925 4.303 6.318 7.62 4.237l17.524-10.995c3.12-1.957 3.12-6.517 0-8.474z"
      ></path>
    </svg>
  )
}
