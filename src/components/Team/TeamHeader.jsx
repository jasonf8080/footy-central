import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6"
import { MdOutlineStadium } from "react-icons/md"
import { GoLinkExternal } from "react-icons/go"

import { TeamHeaderLoader } from "../loaders"
import { fetchTeam } from "../../features/team"

const TeamHeader = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const {
    teamInfo: { loading, data },
  } = useSelector((state) => state.team)

  // Fetch Team Info
  useEffect(() => {
    if (id) {
      dispatch(fetchTeam({ teamID: id }))
    }
  }, [id, dispatch])

  if (loading) return <TeamHeaderLoader />

  const website = data?.website
  const socials = data?.socials || {}
  const facebook = socials.facebook
  const instagram = socials.instagram
  const twitter = socials.twitter || socials.x // in case your API uses "x"

  return (
    <div className="container rounded-lg">
      <section
        id="team-header"
        className="min-h-[220px] lg:min-h-[350px] w-full text-white flex-center text-lg relative bg-[#1a1a1a] rounded-lg"
      >
        <div className="flex max-w-[90%] min-w-[90%] mx-auto relative">
          <img
            className="max-w-[60px] h-[60px] lg:max-w-[220px] lg:h-auto lg:mr-12 mr-4"
            src={data?.logo}
            alt={data?.name || "Team"}
          />

          <div className="lg:mt-4">
            {/* Desktop - official site + socials */}
            <div className="hidden lg:block absolute top-2 right-20">
              <h3>Official Site</h3>
              {website ? (
                <a href={website} target="_blank" rel="noreferrer">
                  {website}
                </a>
              ) : (
                <p>N/A</p>
              )}

              <div className="socials flex gap-2 mt-2">
                {facebook && (
                  <span>
                    <a href={facebook} target="_blank" rel="noreferrer">
                      <FaFacebook />
                    </a>
                  </span>
                )}
                {instagram && (
                  <span>
                    <a href={instagram} target="_blank" rel="noreferrer">
                      <FaInstagram />
                    </a>
                  </span>
                )}
                {twitter && (
                  <span>
                    <a href={twitter} target="_blank" rel="noreferrer">
                      <FaXTwitter />
                    </a>
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold drop-shadow-xl">
              {data?.name}
            </h1>

            <p className="hidden lg:block mt-3 mb-1 lg:mt-4 lg:mb-3">
              {data?.country}
            </p>

            <p className="inline-flex mt-2 lg:mt-0 mb-6 md:mb-3 text-sm md:text-md">
              <span className="mr-2 text-xl translate-y-[2px]">
                <MdOutlineStadium />
              </span>
              {data?.stadium}
            </p>

            {/* Mobile socials */}
            <div className="socials flex gap-2 lg:hidden">
              {facebook && (
                <span>
                  <a href={facebook} target="_blank" rel="noreferrer">
                    <FaFacebook />
                  </a>
                </span>
              )}
              {instagram && (
                <span>
                  <a href={instagram} target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                </span>
              )}
              {twitter && (
                <span>
                  <a href={twitter} target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                </span>
              )}
              {website && (
                <span>
                  <a href={website} target="_blank" rel="noreferrer">
                    <GoLinkExternal />
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamHeader
