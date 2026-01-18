import { VscSearch } from "react-icons/vsc"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setShowMobileMenu } from "../features/menu"

const Searchbar = ({ id, value, type, changeFunction }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearchNavigate = () => {
    navigate(`/search?name=${value}`, { replace: true })

    if (id === "nav-mobile-input") {
      dispatch(setShowMobileMenu())
    }
  }

  return (
    <div
      id={id}
      className="items-center border-b-[1px] border-[#aaa] mb-1"
    >
      <input
        value={value}
        type="text"
        placeholder="Search players..."
        className="min-w-[85%] pl-2 pr-3 py-2 bg-transparent outline-none"
        onChange={(e) =>
          changeFunction({
            type,
            value: e.target.value,
          })
        }
      />

      <button
        disabled={!value}
        onClick={handleSearchNavigate}
        className="ml-4 text-white text-xl cursor-pointer disabled:opacity-40"
      >
        <VscSearch />
      </button>
    </div>
  )
}

export default Searchbar
