import { createContext, useContext, useState } from "react"

export interface CalculatorContextProps{
    bill: number;
    setBillHandler: (value: number) => void;
    tip: number;
    setTipHandler: (value: number) => void;
    people: number;
    setPeopleHandler: (value: number) => void;
    reset: () => void
}

const CalculatorContext = createContext<CalculatorContextProps | null>(null)
const ValuesProvider = ({children}: {children: React.ReactNode}) => {
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    const [people, setPeople] = useState(1)
   
    const setBillHandler = (newBill: number) => setBill(newBill)
    const setTipHandler = (newTip: number) => setTip(newTip)
    const setPeopleHandler = (newPeople: number) => setPeople(newPeople)
    const reset = () => {setBill(0); setTip(0); setPeople(1)}



  return (
    <CalculatorContext.Provider value={{bill, setBillHandler, tip, setTipHandler, people, setPeopleHandler, reset}}>
        {children}
    </CalculatorContext.Provider>
  )
}

export default ValuesProvider

export const useCalculator = () => useContext(CalculatorContext)