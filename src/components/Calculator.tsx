import Input from "./Input"
import TipSelect from "./TipSelect"
import { CalculatorContextProps, useCalculator } from "./ValuesProvider"


export const StyledLabel = ({children, className}: {children: React.ReactNode, className?: string}) =>{
    return(
        <span className={className + " " + "text-sm text-(--grey-400) font-semibold"}>{children}</span>
    )
}

const Calculator = () => {
    const {bill, setBillHandler, tip, setTipHandler, people, setPeopleHandler} = useCalculator() as CalculatorContextProps
  return (
    <section className="flex flex-col justify-between gap-5 lg:h-[40vh] lg:w-[40vh] py-2">
        <Input logo={'/images/icon-dollar.svg'} title="Bill" value={`${bill}`} setValue={setBillHandler} placeholder="0" label='Bill' />
        <div>
            <StyledLabel>Select Tip %</StyledLabel>
            <TipSelect tip={tip} setTipHandler={setTipHandler}/>
        </div>
        <Input logo={'/images/icon-person.svg'} title="People" value={`${people}`} setValue={setPeopleHandler} placeholder="0" label='People' />
    </section>
  )
}

export default Calculator