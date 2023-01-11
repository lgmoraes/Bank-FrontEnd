import { createSlice } from '@reduxjs/toolkit'
import { selectUserProfile } from '../utils/selectors'
import { BASE_URL } from '../utils/contantes'

const initialState = {
  status: 'void',
  data: {},
  error: null,
}

export const getUserProfile = async (store, token) => {
  const status = selectUserProfile(store.getState()).status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(actions.fetching())

  try {
    const response = await fetch(BASE_URL + '/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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

export const setUserName = async (store, token, { firstName, lastName }) => {
  const status = selectUserProfile(store.getState()).status

  if (status === 'pending' || status === 'updating') {
    return
  }

  store.dispatch(actions.fetching())

  try {
    const response = await fetch(BASE_URL + '/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
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

const userProfileSlice = createSlice({
  name: 'userProfile',
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
        draft.data.email = action.payload.body.email
        draft.data.firstName = action.payload.body.firstName
        draft.data.lastName = action.payload.body.lastName
        draft.data.createdAt = action.payload.body.createdAt
        draft.data.updatedAt = action.payload.body.updatedAt
        draft.data.id = action.payload.body.id
        draft.status = 'resolved'
        return
      }

      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.status = 'rejected'
        draft.error = action.payload
        draft.data = {}
        return
      }

      return
    },
  },
})

const { actions, reducer } = userProfileSlice

export const { fetching, resolved, rejected } = actions

export default reducer
