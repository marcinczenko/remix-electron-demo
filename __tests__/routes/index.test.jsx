import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import Home from '../../app/routes/index'

vi.mock('@remix-run/react', async () => {
  const mod = await vi.importActual < typeof import('@remix-run/react') > ('some-path')
  return {
    ...mod,
    useLoaderData: vi.fn().mockReturnValue({
      userDataPath: 'test-path'
    })
  }
})

describe('index', () => {
  it('renders the app', () => {
    render(<Home />)

    screen.getByText('test-path')
  })

  it('looks great', () => {
    const { asFragment } = render(<Home />)

    expect(asFragment()).toMatchSnapshot('Index Route Snapshot')
  })
})
