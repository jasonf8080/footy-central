const PlayerBioLoader = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 rounded-lg max-h-[450px] md:max-h-[300px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <article className="w-full h-[40px] skeleton-loader" />
      <article className="w-full h-[40px] skeleton-loader" />
      <article className="w-full h-[40px] skeleton-loader" />
      <article className="w-full h-[40px] skeleton-loader" />
      <article className="w-full h-[40px] skeleton-loader" />
      <article className="w-full h-[40px] skeleton-loader" />
    </div>
  )
}

export default PlayerBioLoader
