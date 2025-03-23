import userEvent from '@testing-library/user-event'
import Input from '../../components/Input'
import {render, screen} from '@testing-library/react'


describe('Input', () => {
    it('should render an input element', () => { 
        render(<Input logo={'/images/icon-dollar.svg'} title="Bill" value={''} setValue={() => {}} placeholder="0" label='Bill' />)
        const input = screen.getByPlaceholderText('0')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('type', 'number')
    })
    it('should render an image element', () => { 
        render(<Input logo={'/images/icon-dollar.svg'} title="Bill" value={''} setValue={() => {}} placeholder="0" label='Bill' />)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', '/images/icon-dollar.svg')
        expect(image).toHaveAttribute('alt', 'Bill icon')
    })

    it('should call a function when typing', async() => { 
        const mockfunc = vi.fn()
        render(<Input logo={'/images/icon-dollar.svg'} title="Bill" value={''} setValue={mockfunc} placeholder="0" label='Bill' />)
        const input = screen.getByPlaceholderText('0')
        await userEvent.type(input, '10')
        expect(mockfunc).toHaveBeenCalledTimes(2)
    })

})