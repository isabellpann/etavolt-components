// import { Button } from "@/components/ui/button"
import Power from "./components/ui/icons/power"
import SolarType from "./components/ui/icons/solar_type"
import Angle from "./components/ui/icons/angle"
import Date from "./components/ui/icons/date"
import RoofArea from "./components/ui/icons/roof_area"
import Hashtag from "./components/ui/icons/hashtag"

import {Button} from "@etavolt-etatune/button";


function App() {

  return (
    <div>
    {/* <Button variant={"secondary"} className="ml-40 mr-40 mt-40">Secondary</Button>
    <Button variant={"default"} className="mt-40">Default</Button> */}
    <Power/>
    <SolarType/>
    <Angle/>
    <Date/>
    <RoofArea/>
    <Hashtag/>
    <Button variant={"secondary"}/>
  </div>
  )
}

export default App
