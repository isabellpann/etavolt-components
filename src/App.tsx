
import Power from "./components/ui/icons/power";
import SolarType from "./components/ui/icons/solar_type";
import Angle from "./components/ui/icons/angle";
import Date from "./components/ui/icons/date";
import RoofArea from "./components/ui/icons/roof_area";
import Hashtag from "./components/ui/icons/hashtag";

import InfoIconButton from "./components/ui/icons/info";
import { EtavoltButton } from "./components/ui/button";
import {
  EtavoltDropdownMenu,
  EtavoltDropdownMenuContent,
  EtavoltDropdownMenuItem,
  EtavoltDropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { EtavoltCalendar } from "./components/ui/calendar"
import {EtavoltCheckbox} from "./components/ui/checkbox"
import { ExampleForm } from "./ExampleForm"


function App() {
  const [selectedItem, setSelectedItem] = useState<string>("Type of PV Panels Installed");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <div>
      <EtavoltButton variant={"secondary"} className="ml-40 mr-40 mt-40">
        Secondary
      </EtavoltButton>
      <EtavoltButton variant={"default"} className="mt-40">
        Default
      </EtavoltButton>
  
    <Power />
      <SolarType />
      <Angle />
      <InfoIconButton />
      <Date />
    <EtavoltCalendar className="ml-40"/>
      {/* <EtavoltCheckbox className="ml-40" /> */}
      <RoofArea />
      <Hashtag />
  
    <EtavoltButton variant={"secondary"} disabled>
        Secondary disabled
      </EtavoltButton>
      <EtavoltButton variant={"default"} className="ml-40" disabled>
        Default disabled
      </EtavoltButton>

      <EtavoltDropdownMenu>
        <EtavoltDropdownMenuTrigger className="ml-40 mt-40 mb-40"  isDefault={selectedItem === "Type of PV Panels Installed"}>{selectedItem}</EtavoltDropdownMenuTrigger>
        <EtavoltDropdownMenuContent>
          <EtavoltDropdownMenuItem onSelect={() => {handleSelect('Modern Standard')}}
            checked={selectedItem === 'Modern Standard'} >Modern Standard</EtavoltDropdownMenuItem>
          <EtavoltDropdownMenuItem onSelect={() => {handleSelect('Older Non-anti-reflective Coated')}}
            checked={selectedItem === 'Older Non-anti-reflective Coated'} >Older Non-anti-reflective Coated</EtavoltDropdownMenuItem>
          <EtavoltDropdownMenuItem onSelect={() => {handleSelect('Thin Film')}}
            checked={selectedItem === 'Thin Film'} >Thin Film</EtavoltDropdownMenuItem>
        </EtavoltDropdownMenuContent>
      </EtavoltDropdownMenu>
  
    <ExampleForm></ExampleForm>

  </div>
  );
}

export default App;
