import LineupItem from "./LineupItem"

const LineupList = ({ lineups, team }) => {
  return (
    <div className="min-w-full -bg--dark-1 rounded-lg">
      <header className="shadow-xl px-8 py-4 mb-2 border-b-1">
        <div className="flex items-center">
          <img
            src={team.logo}
            className="w-[30px] md:w-[45px] h-auto mr-3 md:mr-4"
            alt={team.name}
          />
          <h1 className="font-bold text-lg md:text-xl">{team.name}</h1>
        </div>
      </header>

      <div>
        {lineups.map((lineup, index) => (
          <LineupItem
            key={lineup.id}
            {...lineup}
            index={index}
            length={lineups.length}
          />
        ))}
      </div>
    </div>
  )
}

export default LineupList
