import { render, screen } from '@testing-library/react'
import TipButton from '../../components/TipButton'
import userEvent from '@testing-library/user-event'
import { ResetButton } from '../../components/Output'


const mockfunc = vi.fn()

describe('Tip Button', () => {
    
    it('should call function on click', async() => { 
        render(<TipButton item={4} onClick={mockfunc} tip={4}/>)
        const button = screen.getByText('4%')
        await userEvent.click(button)
        expect(mockfunc).toHaveBeenCalledTimes(1)
    })

    
})

describe('Reset Button', () => {
    it('should call a function when clicked', async() => {
        render(<ResetButton onClick={mockfunc}/>)
        const resetButton = screen.getByText('Reset') 
        await userEvent.click(resetButton)
        expect(mockfunc).toHaveBeenCalled()
    })
})