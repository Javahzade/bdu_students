import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Squary = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#234D70"
    className="has-solid"
    viewBox="0 0 36 36"
    {...props}
  >
    <Path
      d="M30 32H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2ZM6 6v24h24V6Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
  </Svg>
)
export default Squary
