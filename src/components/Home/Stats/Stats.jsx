import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import StatHead from "./StatHead"
import StatItem from "./StatItem"
import StatDropdown from "./StatDropdown"
import { StatLoader } from "../../loaders"

import { fetchStats } from "../../../features/clubs"
import { sortStatsByNumber } from "../../../utils/helpers"

export const statData = [
  { name: "Goals", id: "topscorers" },
  { name: "Assists", id: "topassists" },
]

const Stats = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    stats: { loading, data },
  } = useSelector((state) => state.clubs)

  const [statType, setStatType] = useState("topscorers")
  const selected = statData.find((stat) => stat.id === statType)?.name
  const [statList, setStatList] = useState([])

  useEffect(() => {
    if (id) {
      dispatch(
        fetchStats({
          activeLeague: id,
          activeStat: statType,
        })
      )
    }
  }, [id, statType, dispatch])

  useEffect(() => {
    setStatList(sortStatsByNumber(data))
  }, [data])

  return (
    <section id="stats-section" className="container">
      {loading ? (
        <StatLoader />
      ) : (
        <div className="standings-container">
          <StatDropdown
            statType={statType}
            setStatType={setStatType}
            selected={selected}
          />

          <StatHead selected={selected} />

          {statList.map((stat, index) => (
            <StatItem
              key={stat.id}
              {...stat}
              index={index}
              length={statList.length}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Stats
