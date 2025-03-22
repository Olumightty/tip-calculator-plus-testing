import { StyledLabel } from "./Calculator"


const Input = ({title, value, setValue, placeholder, logo, label}:{
    title: string,
    value: string,
    setValue: (e: number) => void,
    placeholder: string,
    logo: string,
    label: string
}) => {
    const isPeopleZero = title === "People" && value === "0"
  return (
    <fieldset className="flex flex-col relative">
        <StyledLabel><label htmlFor={title}>{label}</label></StyledLabel>
        {isPeopleZero && <span className="text-red-400 absolute right-0  text-xs">Can't be zero</span>}
        <div className={("flex gap-5 items-center px-2 py-2 bg-(--grey-50) rounded-lg focus-within:outline focus-within:outline-2 focus-within:outline-(--green-400)") + " " + (isPeopleZero ? ("outline outline-2 outline-red-400") : null)}>
            <img src={logo} alt={`${title} icon`} />
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} placeholder={placeholder} id={title} className="text-right text-(--green-900) font-semibold outline-none w-full" />
        </div>
    </fieldset>
  )
}

export default Input