import { Button } from "@/components/ui/button"
import { FormTest } from "./formTest"
import ColourPalette from "./colourPalette"

function App() {

  return (
    <div>
    <Button variant={"secondary"} className="ml-40 mr-40 mt-40">Secondary</Button>
    <Button variant={"default"} className="mt-40">Default</Button>
    <FormTest></FormTest>
    <ColourPalette></ColourPalette>
  </div>
  )
}

export default App
