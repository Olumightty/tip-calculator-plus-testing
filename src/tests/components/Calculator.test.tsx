import { it, expect, describe, vi } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import Calculator from '../../components/Calculator'


vi.mock('../../components/ValuesProvider', () => ({
    useCalculator: () => ({
        bill: 0,
        setBillHandler: vi.fn(),
        tip: 0,
        setTipHandler: vi.fn(),
        people: 1,
        setPeopleHandler: vi.fn(),
    }),
}))

describe('Calculator', () => {

    it('should render a bill input element', () => { 
        render(<Calculator/>)
        const billinput = screen.getByLabelText('Bill')
        expect(billinput).toBeInTheDocument()
    })
    it('should render a custom input element', () => { 
        render(<Calculator/>)
        const customInput = screen.getByPlaceholderText('Custom')
        expect(customInput).toBeInTheDocument()
    })
    it('should render a people input element', () => { 
        render(<Calculator/>)
        const peopleInput = screen.getByLabelText('People')
        expect(peopleInput).toBeInTheDocument()
    })
    it('should respond to bill change', async() => {
        render(<Calculator/>)
        const billinput = screen.getByLabelText('Bill')
        await userEvent.type(billinput, '100')
        expect(billinput).toHaveValue('100')
    })

})