import { tipAmountPerPerson, totalPerPerson } from "../../lib/calculations"


describe('Calculations', () => {
    it('should calculate tip amount per person', () => {
        const tipAmount = tipAmountPerPerson(100, 10, 2)
        expect(tipAmount).toBe("5.00")
    })

    it('should calculate total amount per person', () => {
        const total = totalPerPerson(100, 10, 2)
        expect(total).toBe("55.00")
    })
})