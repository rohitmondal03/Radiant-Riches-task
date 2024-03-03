import { CheckCircle2, Info, ChevronDown } from "lucide-react"


// Buttons 
const buttonsLabel = ["Tools", "AWS Builder", "Start Builds", "Build Supplies", "Tooling", "BlueHosting"];


export default function UpperDetailsSection() {
  return (
    <section className="space-y-8">
      <h1 className='text-5xl text-black'>
        Best Website builders in the US
      </h1>


      <div className="flex items-center justify-between py-3 border-y-2 border-y-zinc-300">
        <div className='flex items-center gap-5 text-zinc-500'>
          <div className="flex items-center gap-2">
            <span><CheckCircle2 /></span>
            <span>Last Updated - </span>
            <span>February 22, 2020</span>
          </div>

          <div className="flex items-center gap-2">
            <span><Info /></span>
            <span>Advertising Disclosure</span>
          </div>
        </div>

        <div className="flex items-center gap-5 text-zinc-500">
          <p>Top Relevant</p>
          <ChevronDown />
        </div>
      </div>


      <div className="flex flex-row items-center gap-5">
        {buttonsLabel.map((btn) => (
          <button className="bg-white rounded-lg py-2 pl-3 pr-12 text-sm">
            {btn}
          </button>
        ))}
      </div>
    </section>
  )
}
