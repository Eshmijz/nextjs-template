import { render, screen } from '@testing-library/react';
import { Footer } from "./Footer"

describe("Footer component", () => {
  it("should render", () => {
    render(<Footer />)
    const CopyElement = screen.getByText(/copyright/i)
    expect(CopyElement).toBeInTheDocument()
  })
})