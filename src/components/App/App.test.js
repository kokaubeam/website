import React from 'react'
import { renderWithRouter, fireEvent, getByText } from 'utils/test-utils'

import { App } from './App'
test('navigation between routes', () => {
  const { getByTestId, queryByTestId } = renderWithRouter(<App />)
  const header = getByTestId('header')

  getByTestId('home')
  expect(queryByTestId('experience')).not.toBeInTheDocument()
  expect(queryByTestId('stack')).not.toBeInTheDocument()
  expect(queryByTestId('not-found')).not.toBeInTheDocument()
  expect(queryByTestId('bio')).not.toBeInTheDocument()

  fireEvent.click(getByText(header, /experience/i))

  expect(queryByTestId('home')).not.toBeInTheDocument()
  getByTestId('experience')
  expect(queryByTestId('stack')).not.toBeInTheDocument()
  expect(queryByTestId('not-found')).not.toBeInTheDocument()
  expect(queryByTestId('bio')).toBeInTheDocument()

  fireEvent.click(getByText(header, /stack/i))

  expect(queryByTestId('home')).not.toBeInTheDocument()
  expect(queryByTestId('experience')).not.toBeInTheDocument()
  getByTestId('stack')
  expect(queryByTestId('not-found')).not.toBeInTheDocument()
  expect(queryByTestId('bio')).toBeInTheDocument()
})

test("renders Not Found for routes that don't exist", () => {
  const { getByTestId, queryByTestId } = renderWithRouter(<App />, {
    route: '/does-not-exist',
  })

  expect(queryByTestId('home')).not.toBeInTheDocument()
  expect(queryByTestId('experience')).not.toBeInTheDocument()
  expect(queryByTestId('stack')).not.toBeInTheDocument()
  getByTestId('not-found')
  expect(queryByTestId('bio')).not.toBeInTheDocument()
})
