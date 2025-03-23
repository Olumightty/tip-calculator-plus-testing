import TipButton from "./TipButton"


const TipSelect = ({tip, setTipHandler}: {tip: number, setTipHandler: (value: number) => void}) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-2 md:mt-5">
        {[5, 10, 15, 25, 50].map((item, i) => <TipButton key={i} tip={tip} item={item} onClick={() => setTipHandler(item)}/>) }
        <input value={tip> 0? tip : ""} type="number" placeholder="Custom" onChange={(e) => setTipHandler(Number(e.target.value))} className="text-(--green-900) font-semibold outline-none bg-(--grey-50) text-center rounded-lg" />
    </div>
  )
}

export default TipSelect