import { useSelector } from "react-redux"

import { IoShirtOutline, IoCalendarOutline } from "react-icons/io5"
import { CiFlag1, CiLineHeight } from "react-icons/ci"
import { GiSoccerField, GiRunningShoe } from "react-icons/gi"

import { getAge } from "../../utils/helpers"
import PlayerBioItem from "./PlayerBioItem"
import {
  PlayerBioLoader,
  PlayerDescriptionLoader,
} from "../loaders"

const PlayerBio = () => {
  const {
    playerInfo: { loading, data },
  } = useSelector((state) => state.player)

  return (
    <section className="player-details rounded-lg text-lg container">
      <div className="grid grid-cols-1 gap-4 md:gap-8">
        {loading ? (
          <PlayerBioLoader />
        ) : (
          <div className="bg-[#1a1a1a] p-8 rounded-lg max-h-[450px] md:max-h-[300px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <PlayerBioItem
              icon={<IoShirtOutline />}
              name="Team"
              attribute={data?.team || "N/A"}
            />

            <PlayerBioItem
              icon={<CiFlag1 />}
              name="Nation"
              attribute={data?.nation || "N/A"}
            />

            <PlayerBioItem
              icon={<GiSoccerField />}
              name="Position"
              attribute={data?.position || "N/A"}
            />

            <PlayerBioItem
              icon={<IoCalendarOutline />}
              name="Age"
              attribute={
                data?.birthday
                  ? getAge(data.birthday).toString()
                  : "N/A"
              }
            />

            <PlayerBioItem
              icon={<GiRunningShoe />}
              name="Foot"
              attribute={data?.foot || "N/A"}
            />

            <PlayerBioItem
              icon={<CiLineHeight />}
              name="Height"
              attribute={data?.height || "N/A"}
            />
          </div>
        )}

        {loading ? (
          <PlayerDescriptionLoader />
        ) : (
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <p className="leading-[2] md:leading-[2.5] text-[16px] md:text-md">
              {data?.description || "No player info"}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default PlayerBio
