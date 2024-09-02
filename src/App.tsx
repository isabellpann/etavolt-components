// import { Button } from "@/components/ui/button"
import Power from "./components/ui/icons/power"
import SolarType from "./components/ui/icons/solar_type"
import Angle from "./components/ui/icons/angle"
import Date from "./components/ui/icons/date"
import RoofArea from "./components/ui/icons/roof_area"
import Hashtag from "./components/ui/icons/hashtag"

import { Button } from "./components/ui/button/button"


function App() {

  return (
    <div>
    <Button variant={"secondary"} className="ml-40 mr-40 mt-40">Secondary</Button>
    <Button variant={"default"} className="mt-40">Default</Button>
    <Power/>
    <SolarType/>
    <Angle/>
    <Date/>
    <RoofArea/>
    <Hashtag/>
    <Button variant={"secondary"} disabled>Secondary disabled</Button>
    <Button variant={"default"} className="ml-40" disabled>Default disabled</Button>

  </div>
  )
}

export default App
