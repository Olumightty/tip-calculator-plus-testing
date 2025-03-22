

const TipSelect = ({tip, setTipHandler}: {tip: number, setTipHandler: (value: number) => void}) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-2 md:mt-5">
        {[5, 10, 15, 25, 50].map((item, i) => <button key={i} className={"rounded-lg py-2 cursor-pointer " + " " + (tip === item ? "text-(--green-900) bg-(--green-400)" : "text-(--white) bg-(--green-900) ")} onClick={() => setTipHandler(item)}>{item}%</button>) }
        <input type="number" placeholder="Custom" onChange={(e) => setTipHandler(Number(e.target.value))} className="text-(--green-900) font-semibold outline-none bg-(--grey-50) text-center rounded-lg" />
    </div>
  )
}

export default TipSelect