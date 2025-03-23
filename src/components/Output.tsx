
import { tipAmountPerPerson, totalPerPerson } from "../lib/calculations"
import Result from "./Result"
import { CalculatorContextProps, useCalculator } from "./ValuesProvider"


export const ResetButton = ({onClick}: {onClick: () => void}) => {
  return (
    <button onClick={onClick} className="bg-(--green-400) text-(--green-900) cursor-pointer rounded-lg py-2 mt-5 font-bold hover:opacity-50">Reset</button>
  )
}

const Output = () => {
    const {bill, tip, people, reset} = useCalculator() as CalculatorContextProps
  return (
    <section className="bg-(--green-900) flex flex-col justify-between px-10 py-10 rounded-lg lg:h-[40vh] w-full lg:w-[40vh]">
        <div className="flex flex-col gap-5">
            <Result title="Tip Amount" value={tipAmountPerPerson(bill, tip, people)} />
            <Result title="Total" value={totalPerPerson(bill, tip, people)}/>
        </div>
        <ResetButton onClick={reset}/>
    </section>
  )
}

export default Output