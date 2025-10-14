import { useState } from 'react'

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) return
    onLogin({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} aria-label="formulaire de connexion">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Entrez votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="password"
        placeholder="Entrez votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" >Se connecter</button>
    </form>
  )
}