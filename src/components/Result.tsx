
import { StyledLabel } from './Calculator'

const Result = ({title, value} : {title: string, value: string}) => {
  return (
    <article className='flex flex-row justify-between items-center'>
        <p>
            <StyledLabel className="text-(--white)">{title}</StyledLabel> <br />
            <span className="text-(--grey-500) font-semibold text-xs">/ person</span>
        </p>
        <span className="text-(--green-400) font-bold text-3xl">${value == "Infinity" || value == "NaN" ? "0.00" : value}</span>
    </article>
    
  )
}

export default Result