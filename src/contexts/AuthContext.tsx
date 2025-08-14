/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useEffect, useState } from "react"
import { getCurrentUser, login, logout } from "../services/Service"
import { ToastAlerta } from "../utils/ToastAlerta"

interface Usuario {
  id: number
  nome: string
  email: string
}

interface AuthContextProps {
  usuario: Usuario | null
  handleLogout(): void
  handleLogin(email: string, password: string): Promise<void>
  isLoading: boolean
  isAuth: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      setUsuario(user)
    }
    setIsLoading(false)
  }, [])

  async function handleLogin(email: string, password: string) {
    setIsLoading(true)
    try {
      await login(`/login`, { email, password }, () => { })
      const user = getCurrentUser()
      setUsuario(user)
      ToastAlerta("Login realizado com sucesso!", "sucesso")
    } catch (error) {
      ToastAlerta("Email ou senha inválidos!", "erro")
    }
    setIsLoading(false)
  }

  function handleLogout() {
    logout();
    setUsuario(null);
    ToastAlerta("Logout realizado com sucesso!", "sucesso");
  }

  const isAuth = !!usuario

  return (
    <AuthContext.Provider value={{
      usuario,
      handleLogin,
      handleLogout,
      isLoading,
      isAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}