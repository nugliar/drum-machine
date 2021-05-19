import { useSelector } from 'react-redux'

import { DrumPad } from './DrumPad'
import { selectAllDrumPads } from './soundbankSlice'

const drumPadBoardStyle = {
  width: '300px',
  height: '300px',
  flexWrap: 'wrap',
  gap: '2%',
  backgroundColor: '#ccc'
}

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
        id='drum-pad-board'
        className='container'
        style={drumPadBoardStyle}
      >
        {renderedDrumPads}
      </div>
  )
}
