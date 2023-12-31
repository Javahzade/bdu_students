import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChevronIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path fill={'#234D70'} d="M6.582 12.141a.695.695 0 0 1-.978 0 .68.68 0 0 1 0-.969l3.908-3.83a.697.697 0 0 1 .979 0l3.908 3.83a.68.68 0 0 1 0 .969.697.697 0 0 1-.979 0L10 9l-3.418 3.141z" />
  </Svg>
)
export default ChevronIcon
