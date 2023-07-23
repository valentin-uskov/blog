import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { getUserData } from '../../store/userActions'

const UserInfo: FC = () => {
  const { token } = useSelector((state: RootState) => state.auth)
  const { userInfo, loading, error } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (token) {
      dispatch(getUserData(token))
    }
  }, [dispatch, token])

  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {userInfo && (
        <>
          <h1>This is Profile page</h1>
          <h3>
            {userInfo.firstName} {userInfo.lastName}
          </h3>
          <p>{userInfo.about}</p>
        </>
      )}
    </>
  )
}

export default UserInfo
