import { styleElementByIndex, setRounded } from '../../utils/helpers'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { TbRectangleVerticalFilled } from 'react-icons/tb'

const GameEventItem = ({
  type,
  action,
  isHome,
  player,
  minute,
  index,
  gameEvents,
}) => {
  return (
    <article
      className={`
        ${styleElementByIndex('even', index)}
        ${setRounded(index, gameEvents, 'lg')}
        w-full px-4 md:px-8 py-3 md:py-4
        grid grid-cols-[1fr,0.5fr,1fr]
        text-sm md:text-lg
      `}
    >
      {/* Player / Icon */}
      <div
        className={`flex items-center ${
          isHome === 'Yes'
            ? 'order-1 justify-end'
            : 'order-3 justify-start'
        }`}
      >
        {/* Card */}
        {type === 'Card' && (
          <span
            className={`${
              action === 'Yellow Card'
                ? 'bg-yellow-400 text-yellow-400'
                : 'bg-red-500 text-red-500'
            } mr-2 md:mr-4`}
          >
            <TbRectangleVerticalFilled />
          </span>
        )}

        {/* Goal */}
        {type === 'Goal' && (
          <span className="mr-2 md:mr-4 text-lg md:text-2xl translate-x-[-3px]">
            <MdOutlineSportsSoccer />
          </span>
        )}

        {/* Player name */}
        <p className="mr-4 hidden md:block">{player}</p>
        <p className="mr-4 block md:hidden text-xs">
          {player.split(' ')[0].charAt(0)}. {player.split(' ')[1]}
        </p>
      </div>

      {/* Minute */}
      <p className="order-2 centered">
        {minute} '
      </p>

      {/* Spacer (opposite side) */}
      <div className={isHome === 'Yes' ? 'order-3' : 'order-1'} />
    </article>
  )
}

export default GameEventItem
