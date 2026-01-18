const PlayerClubItem = ({
  joined,
  departed,
  team,
  teamLogo,
  moveType,
}) => {
  return (
    <article className="flex justify-between mb-4">
      <div className="flex items-center">
        <img
          src={teamLogo}
          className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] mr-3 md:mr-5"
          alt={team}
        />
        <h3>
          {team} {moveType === "Loan" ? "(Loan)" : ""}
        </h3>
      </div>

      <p>
        {joined} - {departed}
      </p>
    </article>
  )
}

export default PlayerClubItem
