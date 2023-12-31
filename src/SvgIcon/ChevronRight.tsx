import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChevronRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#234D70"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path d="M12.141 13.418a.695.695 0 0 1 0 .978.68.68 0 0 1-.969 0l-3.83-3.908a.697.697 0 0 1 0-.979l3.83-3.908a.68.68 0 0 1 .969 0 .695.695 0 0 1 0 .978L9 10l3.141 3.418z" />
  </Svg>
)
export default ChevronRight
