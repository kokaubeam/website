import { all } from 'redux-saga/effects'
import { saga as analyticsSaga } from './components/Analytics'
import { saga as headerSaga } from './components/Header'

import rootSaga from './saga'

describe('Root saga', () => {
  let generator

  beforeAll(() => {
    generator = rootSaga()
  })

  it('should start all the sagas', () => {
    expect(generator.next().value).toEqual(all([
      analyticsSaga(),
      headerSaga()
    ]))
  })

  it('should be done', () => {
    expect(generator.next().done).toBe(true)
  })
})
