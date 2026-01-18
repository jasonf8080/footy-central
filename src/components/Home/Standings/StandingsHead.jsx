const StandingsHead = () => {
  return (
    <article className="standing-row standing-row-head rounded-t-lg">
      <p>Club</p>
      <p className="centered">MP</p>
      <p className="centered">W</p>
      <p className="centered">D</p>
      <p className="centered">L</p>
      <p className="centered hidden md:block">GF</p>
      <p className="centered hidden md:block">GA</p>
      <p className="centered hidden md:block">GD</p>
      <p className="centered">PTS</p>
      <p className="centered hidden lg:block">Form</p>
    </article>
  )
}

export default StandingsHead
