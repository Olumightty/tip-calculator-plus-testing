
const TipButton = ({tip, item, onClick} : {tip: number, item: number, onClick: () => void}) => {
  return (
    <button  className={"rounded-lg py-2 cursor-pointer " + " " + (tip === item ? "text-(--green-900) bg-(--green-400)" : "text-(--white) bg-(--green-900) ")} onClick={onClick}>{item}%</button>
  )
}

export default TipButton