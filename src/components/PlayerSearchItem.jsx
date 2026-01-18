import defaultPlayer from "../../public/images/defaultPlayer.png"

const PlayerSearchItem = () => {
  return (
    <article className="roster-card fade-gradient flex flex-col shadow-md rounded-lg relative">
      {/* Skeleton overlay */}
      <div className="absolute top-0 left-0 min-w-full min-h-full skeleton-loader z-10 rounded-lg" />

      <div className="py-4 px-6">
        <h3 className="font-bold text-sm md:text-xl uppercase">
          name
        </h3>
        <h1>team</h1>
        <p className="hidden md:block capitalize">
          position
        </p>
      </div>

      <img
        src={defaultPlayer}
        alt="name"
        className="w-full h-full pt-2 pr-1 mr-3 rounded-t-lg"
      />
    </article>
  )
}

export default PlayerSearchItem
