const PlayerBioItem = ({ icon, name, attribute }) => {
  return (
    <article className="flex items-center mb-4 text-lg">
      <span className="text-2xl md:text-3xl">{icon}</span>

      <p className="text-[#ccc] text-sm md:text-xl my-2 ml-3 mr-4 md:mr-8 font-bold">
        {name}:
      </p>

      <h3 className="text-sm md:text-xl">
        {attribute || "N/A"}
      </h3>
    </article>
  )
}

export default PlayerBioItem
