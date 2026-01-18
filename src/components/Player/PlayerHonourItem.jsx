import trophy from "../../../public/images/trophy.webp"

const PlayerHonourItem = ({ id, amount, competition }) => {
  return (
    <article className="mb-6">
      <div className="flex">
        <img
          src={trophy}
          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:translate-y-[5px] mr-2 md:mr-4"
          alt=""
        />

        <div>
          <h3>
            {amount}x {competition}
          </h3>
        </div>
      </div>
    </article>
  )
}

export default PlayerHonourItem
