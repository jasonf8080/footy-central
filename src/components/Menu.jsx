import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { LiaTimesSolid } from "react-icons/lia"
import { FaChevronRight } from "react-icons/fa6"

import { toggleMenu } from "../features/clubs"
import { leagues, menuTeams } from "../utils/data"

const Menu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [activeList, setActiveList] = useState("")

  const closeMenu = (id) => {
    dispatch(toggleMenu())
    navigate(`/team/${id}`)
  }

  return (
    <div className="fade-gradient w-[100vw] h-[100vh] fixed top-0 left-0 z-[99]">
      <div className="shadow-lg w-full shadow-black py-4">
        <div className="container relative">
          <button
            className="text-5xl"
            onClick={() => dispatch(toggleMenu())}
          >
            <LiaTimesSolid />
          </button>
        </div>
      </div>

      <div className="min-h-full pt-6">
        <div className="container">
          <div className="grid grid-cols-[1fr,2fr] gap-20 mt-16">
            <div className="flex flex-col items-start text-2xl">
              <Button text="teams" setActiveList={setActiveList} />
              <Button text="leagues" setActiveList={setActiveList} />
              <Button
                text="competitions"
                setActiveList={setActiveList}
              />
            </div>

            <div>
              {activeList === "leagues" && (
                <div className="grid grid-cols-2">
                  {leagues.map((item) => (
                    <article
                      key={item.id}
                      className="flex text-xl mb-6 cursor-pointer"
                      onClick={() => closeMenu(item.id)}
                    >
                      <img
                        src={item.image}
                        className="w-[25px] h-[25px] mr-4"
                        alt={item.name}
                      />
                      <p>{item.name}</p>
                    </article>
                  ))}
                </div>
              )}

              {activeList === "teams" && (
                <div className="grid grid-cols-2">
                  {menuTeams.map((item) => (
                    <article
                      key={item.id}
                      className="flex text-xl mb-6 cursor-pointer"
                      onClick={() => closeMenu(item.id)}
                    >
                      <img
                        src={item.image}
                        className="w-[25px] h-[25px] mr-4"
                        alt={item.name}
                      />
                      <p>{item.name}</p>
                    </article>
                  ))}
                </div>
              )}

              {/* If you actually want competitions later, you can add it here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Button = ({ text, setActiveList }) => {
  return (
    <div
      className="flex justify-between items-center min-w-full mb-6 cursor-pointer"
      onClick={() => setActiveList(text)}
    >
      <button className="capitalize">{text}</button>
      <span className="text-2xl translate-y-[-5px]">
        <FaChevronRight />
      </span>
    </div>
  )
}

export default Menu
