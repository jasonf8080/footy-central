import { useState } from "react"
import { statData } from "./Stats"

const StatDropdown = ({ statType, setStatType, selected }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block w-48 mb-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between rounded-lg pr-4 pl-6 py-2 text-lg font-medium text-gray-200 bg-[#1f1f1f] focus:outline-none"
      >
        {selected}
        <svg
          className={`ml-2 h-4 w-4 text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border border-white/10 bg-gradient-to-b from-[#1f1f1f] to-[#141414] shadow-xl">
          <ul className="py-1 text-sm text-gray-200">
            {statData.map((stat) => (
              <li
                key={stat.id}
                onClick={() => {
                  setStatType(stat.id)
                  setOpen(false)
                }}
                className="px-4 py-2 hover:bg-white/5 cursor-pointer"
              >
                {stat.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default StatDropdown
