import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const InputIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#5C5C5C"
      fillRule="evenodd"
      d="M9.375 12a.75.75 0 0 1 .75-.75H20.25a.75.75 0 0 1 0 1.5H10.125a.75.75 0 0 1-.75-.75ZM3 12a.75.75 0 0 1 .75-.75h2.625a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z"
      clipRule="evenodd"
    />
    <Path
      fill="#5C5C5C"
      fillRule="evenodd"
      d="M7.125 12a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0Zm1.125 2.625a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25ZM16.875 5.25a.75.75 0 0 1 .75-.75h2.625a.75.75 0 0 1 0 1.5h-2.625a.75.75 0 0 1-.75-.75ZM3 5.25a.75.75 0 0 1 .75-.75h10.125a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Z"
      clipRule="evenodd"
    />
    <Path
      fill="#5C5C5C"
      fillRule="evenodd"
      d="M14.625 5.25a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0Zm1.125 2.625a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25ZM13.875 18.75a.75.75 0 0 1 .75-.75h5.625a.75.75 0 0 1 0 1.5h-5.625a.75.75 0 0 1-.75-.75ZM3 18.75a.75.75 0 0 1 .75-.75h7.125a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
    <Path
      fill="#5C5C5C"
      fillRule="evenodd"
      d="M11.625 18.75a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0Zm1.125 2.625a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default InputIcon
