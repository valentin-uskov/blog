import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { AppDispatch, RootState } from '../../store'
import UserInfo from '../../components/UserInfo'
import { userLogout } from '../../store/authSlice'

const Profile: FC = () => {
  const { token, loading, error } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()

  const logoutHandler = () => {
    dispatch(userLogout())
  }

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {token && (
        <>
          <UserInfo />
          <button onClick={logoutHandler}>Logout</button>
        </>
      )}
      {!loading && !error && !token && <Navigate to="/login" replace={true} />}
    </>
  )
}

export default Profile
