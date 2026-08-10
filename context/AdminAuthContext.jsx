'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { adminLogin, adminMe } from '@/lib/api'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState('')
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('admin_token')
    const storedUser = localStorage.getItem('admin_username') || ''
    if (!stored) {
      setChecking(false)
      return
    }
    setToken(stored)
    setUsername(storedUser)
    adminMe()
      .then((data) => {
        setUsername(data.username || '')
        localStorage.setItem('admin_username', data.username || '')
      })
      .catch(() => {
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_username')
        setToken(null)
        setUsername('')
      })
      .finally(() => setChecking(false))
  }, [])

  const login = useCallback(async (user, pass) => {
    const data = await adminLogin(user, pass)
    localStorage.setItem('admin_token', data.token)
    localStorage.setItem('admin_username', data.username)
    setToken(data.token)
    setUsername(data.username)
    return data
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_username')
    setToken(null)
    setUsername('')
  }, [])

  return (
    <AdminAuthContext.Provider
      value={{
        token,
        username,
        isAuthenticated: !!token,
        checking,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider')
  return ctx
}
