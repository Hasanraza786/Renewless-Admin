import type { FormEvent } from 'react'

export default function SignInPage() {
  return (
    <main>
      <form onSubmit={(event: FormEvent) => event.preventDefault()}>
        <h1>Renewless admin</h1>
        <label>
          Email
          <input type="email" name="email" autoComplete="username" />
        </label>
        <label>
          Password
          <input type="password" name="password" autoComplete="current-password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </main>
  )
}
