const GameHeaderLoader = () => {
  return (
    <section id="game-header" className="fade-gradient p-10 pb-16">
      <div className="text-center flex-center flex-col mb-6">
        <p className="font-bold text-xl mb-2 w-52 h-8 skeleton-loader" />
        <p className="w-24 h-8 skeleton-loader" />
      </div>

      <div className="grid grid-cols-[2fr,1fr,2fr] mx-auto font-bold">
        {/* Home */}
        <div className="flex justify-end items-center">
          <h1 className="mr-2 md:mr-5 text-3xl w-10 md:w-32 h-10 skeleton-loader" />
          <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full skeleton-loader" />
        </div>

        {/* Score */}
        <div className="flex justify-center items-center font-bold mx-3 md:mx-6 text-4xl">
          <h1 className="skeleton-loader w-5 h-6 md:w-8 md:h-8" />
          <span className="mx-2 md:mx-4">-</span>
          <h1 className="skeleton-loader w-5 h-6 md:w-8 md:h-8" />
        </div>

        {/* Away */}
        <div className="flex justify-start items-center">
          <h1 className="ml-2 md:ml-5 text-3xl w-10 md:w-32 h-10 skeleton-loader" />
          <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full skeleton-loader order-[-1]" />
        </div>
      </div>
    </section>
  )
}

export default GameHeaderLoader
