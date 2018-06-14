import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import { headerNavToggle, headerNavClose } from './actions'
import { isNavOpenSelector } from './selectors'
import SocialNav from '../SocialNav'

jest.mock('./selectors')

import { Header, mapStateToProps, mapDispatchToProps } from './Header'

describe('Header component', () => {
  describe('#render', () => {
    let component

    const props = {
      isNavOpen: null,
      toggleNav: jest.fn(),
      closeNav: jest.fn()
    }

    beforeAll(() => {
      component = shallow(<Header {...props} />)
    })

    it('should render', () => {
      expect(component).toExist()
    })

    it('should render the regular brand', () => {
      const brand = component.find(Link).filterWhere(link => link.contains('Jonathan Davis'))
      expect(brand).toExist()
    })

    it('should render the compact brand', () => {
      const brand = component.find(Link).filterWhere(link => link.contains('JD'))
      expect(brand).toExist()
    })

    it('should render the primary nav', () => {
      const nav = component.find('#primary-nav')
      expect(nav).toExist()
      expect(nav.prop('aria-labelledby')).toBe('primary-nav-toggle')
      expect(nav.prop('className')).toBe('nav primary')
    })

    it('should render the social nav', () => {
      const nav = component.find(SocialNav)
      expect(nav).toExist()
    })

    describe('when the primary nav toggle is clicked', () => {
      beforeAll(() => {
        const primaryNavToggle = component.find('#primary-nav-toggle')
        primaryNavToggle.simulate('click')
      })

      it('should toggle the menu', () => {
        expect(props.toggleNav).toHaveBeenCalled()
      })
    })

    describe('when the primary nav is open', () => {
      beforeAll(() => {
        component.setProps({
          isNavOpen: true
        })
      })

      it('should add the "open" class to the primary nav', () => {
        const nav = component.find('#primary-nav')
        expect(nav.prop('className')).toBe('nav primary open')
      })

      it('should render the backdrop', () => {
        const backdrop = component.find('#backdrop')
        expect(backdrop).toExist()
      })

      describe('when the backdrop is clicked', () => {
        beforeAll(() => {
          const backdrop = component.find('#backdrop')
          backdrop.simulate('click')
        })

        it('should close the nav', () => {
          expect(props.closeNav).toHaveBeenCalled()
        })
      })
    })
  })

  describe('#mapStateToProps', () => {
    let map

    const mockState = {
      mock: 'state'
    }
    const mockIsNavOpen = true

    beforeAll(() => {
      isNavOpenSelector.mockReturnValue(mockIsNavOpen)
      map = mapStateToProps(mockState)
    })

    afterAll(() => {
      isNavOpenSelector.mockReset()
    })

    it('should select isNavOpen from the state', () => {
      expect(isNavOpenSelector).toHaveBeenCalledWith(mockState)
    })

    it('should map state to props', () => {
      expect(map).toEqual({
        isNavOpen: mockIsNavOpen
      })
    })
  })

  describe('#mapDispatchToProps', () => {
    let map

    const mockDispatch = jest.fn()

    beforeAll(() => {
      map = mapDispatchToProps(mockDispatch)
    })

    it('should map dispatch to props', () => {
      expect(map).toEqual({
        closeNav: expect.any(Function),
        toggleNav: expect.any(Function)
      })
    })

    describe('#closeNav', () => {
      beforeAll(() => {
        map.closeNav()
      })

      it('should dispatch a headerNavClose action', () => {
        expect(mockDispatch).toHaveBeenCalledWith(headerNavClose())
      })
    })

    describe('#toggleNav', () => {
      beforeAll(() => {
        map.toggleNav()
      })

      it('should dispatch a headerNavToggle action', () => {
        expect(mockDispatch).toHaveBeenCalledWith(headerNavToggle())
      })
    })
  })
})
