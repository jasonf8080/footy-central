// ✅ Vite-friendly public asset path
const defaultPlayer = "/images/defaultPlayer.png"

const PlayerHeaderLoader = () => {
  return (
    <section
      id="player-header"
      className="min-h-[375px] -bg--dark-1 flex justify-between items-start pt-6 pb-0 fade-gradient"
    >
      <div className="container flex flex-col md:flex-row justify-between items-start">
        <div className="min-w-full md:min-w-fit flex flex-row-reverse justify-between md:flex-row md:justify-start">
          <h1 className="text-8xl w-16 h-16 md:w-24 md:h-24 font-extrabold md:mr-5 translate-y-3 skeleton-loader" />

          <div className="pt-3">
            <h1 className="w-52 h-8 md:h-10 mb-4 skeleton-loader" />
            <h1 className="w-52 h-8 md:h-10 skeleton-loader" />
          </div>
        </div>

        <div className="flex">
          <img
            className="w-[80%] mx-auto md:w-[350px]"
            src={defaultPlayer}
            alt="Player"
          />
        </div>
      </div>
    </section>
  )
}

export default PlayerHeaderLoader
