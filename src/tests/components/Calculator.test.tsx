import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import Calculator from '../../components/Calculator'
import ValuesProvider from '../../components/ValuesProvider'



export const renderWithContext = (ui: React.ReactElement) => {
    return render(<ValuesProvider>{ui}</ValuesProvider>)
}

describe('Calculator', () => {

    it('should render a bill input element', () => { 
        renderWithContext(<Calculator/>)
        const billinput = screen.getByLabelText('Bill')
        expect(billinput).toBeInTheDocument()
    })
    
    it('should render a custom input element', () => { 
        renderWithContext(<Calculator/>)
        const customInput = screen.getByPlaceholderText('Custom')
        expect(customInput).toBeInTheDocument()
    })

    it('should render a people input element', () => { 
        renderWithContext(<Calculator/>)
        const peopleInput = screen.getByLabelText('People')
        expect(peopleInput).toBeInTheDocument()
    })

    it('should respond to bill change', async() => {
        renderWithContext(<Calculator/>)
        const billinput = screen.getByLabelText('Bill')
        await userEvent.type(billinput, '100')
        expect(billinput).toHaveValue(100)
    })

    it('should respond to people change', async() => {
        renderWithContext(<Calculator/>)
        const peopleInput = screen.getByLabelText('People')
        await userEvent.clear(peopleInput)
        await userEvent.type(peopleInput, '5')
        expect(peopleInput).toHaveValue(5)
    })

    it('should respond to tip button change', async() => {
        renderWithContext(<Calculator/>)
        const buttons = screen.getAllByRole('button')
        const customInput = screen.getByPlaceholderText('Custom')
        for(const button of buttons){
            await userEvent.click(button)
            expect(customInput).toHaveValue(Number(button.textContent?.replace('%', '')))
        }
        
    })

    it('should respond to custom tip change', async() => {
        renderWithContext(<Calculator/>)
        const customInput = screen.getByPlaceholderText('Custom')
        await userEvent.type(customInput, '10')
        expect(customInput).toHaveValue(10)
    })
})