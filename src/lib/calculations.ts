

export const tipAmountPerPerson = (bill: number, tip: number, people: number) => {
    const totalTipAmount = (bill * tip) / 100
    const tipPerPerson = totalTipAmount / people
    return tipPerPerson.toFixed(2)
}

export const totalPerPerson = (bill: number, tip: number, people: number) => {
    const totalTipAmount = (bill * tip) / 100
    const totalPerPerson = (bill + totalTipAmount) / people
    return totalPerPerson.toFixed(2)
}