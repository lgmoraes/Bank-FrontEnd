import { createSlice } from '@reduxjs/toolkit'
import { selectUserLogin } from '../utils/selectors'
import { BASE_URL } from '../utils/contantes'

const initialState = {
  status: 'void',
  token: null,
  error: null,
}

export const login = async (store, { email, password }) => {
  const status = selectUserLogin(store.getState()).status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(actions.fetching())

  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'default',
    })

    const data = await response.json()

    if (data.status !== 200) {
      store.dispatch(actions.rejected(data.message))
      return
    }

    store.dispatch(actions.resolved(data))
  } catch (error) {
    store.dispatch(actions.rejected(error))
  }

  return
}

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }

      if (draft.status === 'rejected') {
        draft.status = 'pending'
        draft.error = null
        return
      }

      if (draft.status === 'resolved') {
        draft.status = 'updating'
        return
      }

      return
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.token = action.payload.body.token
        draft.status = 'resolved'
        return
      }

      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.status = 'rejected'
        draft.error = action.payload
        draft.token = null
        return
      }

      return
    },
    logout: (draft) => {
      if (draft.status === 'resolved') {
        draft.status = 'void'
        draft.token = null
        draft.error = null
        return
      }

      return
    },
  },
})

const { actions, reducer } = userLoginSlice

export const { fetching, resolved, rejected, logout } = actions

export default reducer
