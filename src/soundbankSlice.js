import { createSlice } from '@reduxjs/toolkit'

import { bankOne, bankTwo } from './soundbanks'

const initialState = {
  bank: bankOne,
  bankId: 0,
  power: true,
  volume: 30,
  display: '-----'
}

const soundbankSlice = createSlice({
  name: 'soundbank',
  initialState,
  reducers: {
    switchSoundbank(state) {
      state.bank = state.bankId === 0 ?
        bankTwo : bankOne
      state.bankId = (state.bankId + 1) % 2
    },
    switchPower(state) {
      state.power = !state.power
    },
    setVolume(state, action) {
      const { volume } = action.payload
      state.volume = volume
    },
    setDisplay(state, action) {
      const { text } = action.payload
      if (state.power) {
        state.display = text
      }
    }
  }
})

export const selectBankId = state => state.soundbank.bankId
export const selectPower = state => state.soundbank.power
export const selectVolume = state => state.soundbank.volume
export const selectDisplay = state => state.soundbank.display
export const selectAllDrumPads = state => state.soundbank.bank
export const selectDrumPadByKeyCode = (state, keyCode) =>
  state.soundbank.bank.find(pad => pad.keyCode === keyCode)

export const {
  switchSoundbank,
  switchPower,
  setVolume,
  setDisplay
} = soundbankSlice.actions

export default soundbankSlice.reducer
