const LeagueHeaderLoader = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-[160px] md:min-h-[285px] h-[160px] md:h-[285px] w-full flex justify-center items-center">
      <div className="container flex items-start pl-3">
        <div className="w-[60px] h-[60px] rounded-full skeleton-loader mr-4 md:mr-6" />

        <div>
          <div className="w-[200px] h-8 md:w-[400px] md:h-12 mb-2 md:mb-3 skeleton-loader" />
          <div className="w-[100px] md:w-40 h-5 md:h-6 skeleton-loader" />
        </div>
      </div>
    </div>
  )
}

export default LeagueHeaderLoader
