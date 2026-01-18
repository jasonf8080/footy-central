import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { formatName } from "../../utils/helpers"
import { PlayerHeaderLoader } from "../loaders"
import { fetchPlayerInfo } from "../../features/player"

const PlayerHeader = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [formattedName, setFormattedName] = useState([])

  const {
    playerInfo: { loading, data },
  } = useSelector((state) => state.player)

  useEffect(() => {
    if (id) {
      dispatch(fetchPlayerInfo({ playerID: id }))
    }
  }, [id, dispatch])

  useEffect(() => {
    setFormattedName(formatName(data?.name || ""))
  }, [data?.name])

  if (loading) return <PlayerHeaderLoader />

  return (
    <div className="container rounded-lg">
      <section
        id="player-header"
        className="min-h-[375px] lg:min-h-[375px] relative lg:flex justify-between items-start pt-6 pb-0 bg-[#1a1a1a] rounded-lg"
      >
        <div className="container flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-row-reverse justify-between md:flex md:flex-row md:justify-start min-w-full md:min-w-fit">
            <h1 className="justify-between text-5xl md:text-8xl font-extrabold mr-2 lg:mr-5">
              {data?.number}
            </h1>

            <div className="md:pt-3">
              <h1
                className={
                  !formattedName?.[1]
                    ? "text-2xl lg:text-4xl font-bold uppercase"
                    : "text-xl lg:text-4xl"
                }
              >
                {formattedName?.[0]}
              </h1>

              <h1 className="text-2xl lg:text-4xl font-bold mt-1 uppercase">
                {formattedName?.[1]}
                {formattedName?.[2] ? `-${formattedName[2]}` : ""}
              </h1>
            </div>
          </div>

          <div className="flex mx-auto mt-[20px] md:mt-0 md:mr-[100px]">
            <img
              className="w-[80%] mx-auto lg:w-[350px]"
              src={data?.image}
              alt="Player"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlayerHeader
