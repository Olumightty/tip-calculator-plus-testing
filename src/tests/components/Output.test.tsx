import {  screen } from '@testing-library/react'
import Output from '../../components/Output'
import { renderWithContext } from './Calculator.test'






describe('Output', () => {
    it('should render reset button', () => { 
        renderWithContext(<Output/>)
        const resetButton = screen.getByRole('button', {name: 'Reset'})
        expect(resetButton).toBeInTheDocument()

    })

})