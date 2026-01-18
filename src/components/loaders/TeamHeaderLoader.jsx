const TeamHeaderLoader = () => {
  return (
    <>
      <section
        id="team-header"
        className="min-h-[250px] lg:min-h-[400px] w-full -bg--dark-1 text-white flex-center md:pb-20 text-lg relative"
      >
        <div className="flex min-w-[90%] mx-auto relative">
          <div className="rounded-full w-[60px] h-[60px] md:w-[220px] md:h-[220px] mr-6 md:mr-12 skeleton-loader" />

          <div className="hidden md:block mt-4">
            <div className="absolute top-2 right-20">
              <h3 className="w-24 h-5 skeleton-loader mb-4" />
              <p className="w-36 h-5 skeleton-loader" />
            </div>

            <h1 className="w-52 h-8 skeleton-loader mb-4" />
            <p className="w-24 h-6 skeleton-loader mb-4" />

            <p className="inline-flex mb-4 w-32 h-6 skeleton-loader">
              <span className="mr-1 text-xl" />
            </p>
          </div>
        </div>

        <div className="block md:hidden">
          <p className="w-36 h-6 skeleton-loader mb-4" />
          <p className="w-30 h-6 skeleton-loader mb-4" />
          <p className="w-20 h-6 skeleton-loader mb-4" />
        </div>
      </section>
    </>
  )
}

export default TeamHeaderLoader
