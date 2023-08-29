import { Counter } from "./components/01-Counter/Counter"
import { ConditionalColor } from "./components/04-ConditionalColor/ConditionalColor"
import { RockPaperScissor } from "./components/05-RockPaperScissors/RockPaperScissor"
import { InputText } from "./components/02-InputText/InputText";
import { ToogleState } from "./components/03-ToogleState/ToogleState";

function App() {
  
  return (
    <div className='w-full h-96 bg-zinc-700 flex flex-col justify-center items-center'>
      {/* <Counter /> */}
      {/* <InputText/> */}
      {/* <ToogleState/>   */}
      <ConditionalColor /> 
      {/* <RockPaperScissor /> */}
    </div>
  )
}

export default App
