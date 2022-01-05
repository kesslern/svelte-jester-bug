/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'

import {render} from '@testing-library/svelte'

import Index from './index.svelte'

  test('rendering', () => {
    const {getByTestId} = render(Index, {
    })

    expect(getByTestId('test')).toBeInTheDocument()
  })