/* eslint-disable react/prop-types */
import { StickyNavbar } from "./StickyNavbar"
import SubNavbar from "./SubNavbar"


const Navbar = ({color}) => {
  console.log(color)
  return (
    <div>
    <SubNavbar color={color}/>
      <StickyNavbar color={color} />

    </div>
  )
}

export default Navbar

