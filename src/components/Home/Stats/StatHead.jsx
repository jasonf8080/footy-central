const StatHead = ({ selected }) => {
  return (
    <article className="standing-row stat-row-head rounded-t-lg font-bold">
      <p>#</p>
      <p>Player</p>
      <p>Team</p>
      <p className="centered">{selected}</p>
    </article>
  )
}

export default StatHead
