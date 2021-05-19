import { configureStore } from '@reduxjs/toolkit'

import soundbankReducer from './soundbankSlice'

export default configureStore({
  reducer: {
    soundbank: soundbankReducer
  }
})
