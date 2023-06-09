import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  showAuthModal: false,
}

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    setAuthModal: (state, action: PayloadAction<boolean>) => {
      state.showAuthModal = action.payload
    },
  },
})

export const authModalActions = authModalSlice.actions
