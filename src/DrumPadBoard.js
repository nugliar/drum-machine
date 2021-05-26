import { useSelector } from 'react-redux'

import { DrumPad } from './DrumPad'
import { selectAllDrumPads } from './soundbankSlice'

export const DrumPadBoard = () => {
  const drumPads = useSelector(selectAllDrumPads)

  const renderedDrumPads = drumPads.map(pad => {
    return (
      <DrumPad
        key={pad.keyTrigger}
        keyChar={pad.keyTrigger}
        keyCode={pad.keyCode}
        name={pad.id}
        audioUrl={pad.url}
      />
    )
  })

  return (
      <div
        id='drumpad-board'
        className='container'
      >
        {renderedDrumPads}
      </div>
  )
}
