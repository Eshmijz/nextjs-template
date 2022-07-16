import { render, screen } from '@testing-library/react';
import { Header } from "./Header"

const user = {
  name: 'Eshmijz',
  email: 'eshmijz@gmail.com',
  lastSignInDate: "today"
}

describe("Header component", () => {
  it("should render user name", () => {
    render(<Header user={user} />)
    const userName = screen.getByText(/Eshmijz/i)
    expect(userName).toBeInTheDocument()
  })

  it("ユーザー認証がされていないとき", () => {
    render(<Header />)
    const signIn = screen.getByText(/signIn/i)
    expect(signIn).toBeInTheDocument()
  })
})