const StatOption = ({ name, value, setActiveStat }) => {
  return (
    <option
      className="capitalize bg-white"
      value={value}
      onClick={() => setActiveStat(value)}
    >
      {name}
    </option>
  )
}

export default StatOption
