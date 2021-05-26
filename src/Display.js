import { useSelector } from 'react-redux'

import { selectDisplay, selectPower } from './soundbankSlice'

export const Display = () => {
  const display = useSelector(selectDisplay)
  const power = useSelector(selectPower)

  const displayColor = power ? 'display-active' : 'display-inactive'
  const displayClasses = `container display-container ${displayColor}`

  return (
    <div
      id='display'
      className={displayClasses}
    >
      <p className='display-text'>{display}</p>
    </div>
  )
}
