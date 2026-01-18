import RosterItem from "./RosterItem"

const RosterPositionGroup = ({ group, data }) => {
  return (
    <div className="mb-20">
      <h2 className="section-heading capitalize pl-6">
        {group}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 max-w-full">
        {data.map((roster) => (
          <RosterItem
            key={roster.id}
            {...roster}
          />
        ))}
      </div>
    </div>
  )
}

export default RosterPositionGroup
