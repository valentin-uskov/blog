import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { userLogin } from '../../store/authActions'
import { LoginData } from '../../models'
import { AppDispatch, RootState } from '../../store'
import { useNavigate } from 'react-router'

import css from './Login.module.scss'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { loading, error, token } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [navigate, token])

  const submitForm = (fieldValues: FieldValues) => {
    dispatch(userLogin(fieldValues as LoginData))
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={css.form}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="name" className="form-input" {...register('name')} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-input" {...register('password')} required />
      </div>
      <button type="submit" className="button" disabled={loading}>
        Login
      </button>
      {loading && <span>loading...</span>}
      {error && <span className={css.error}>{error}</span>}
    </form>
  )
}
export default Login
