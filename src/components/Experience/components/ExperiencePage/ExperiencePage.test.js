import React from 'react'
import { shallow } from 'enzyme'
import ExperienceItem from '../ExperienceItem'
import Bio from '../../../Bio'
import {
  experienceOrderByStartSelector,
  experienceYearsOfExperienceSelector
} from '../../selectors'
import { requestExperience } from '../../actions'

jest.mock('../../selectors')

import {
  ExperiencePage,
  mapStateToProps,
  mapDispatchToProps
} from './ExperiencePage'

describe('ExperiencePage component', () => {
  let component

  const props = {
    experience: [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }, {
      name: 'Black Mesa',
      position: 'Level 3 Research Associate Scientist',
      description: 'Defended the human race against hostile aliens. Lead an uprising against alien invaders.',
      logo: './media/black-mesa.svg',
      start: new Date('May 1, 2000'),
      end: new Date('May 16, 2005')
    }],
    getExperience: jest.fn(),
    yearsOfExperience: 15
  }

  beforeAll(() => {
    component = shallow(<ExperiencePage {...props} />)
  })

  it('should render', () => {
    expect(component).toExist()
  })

  it('should render the title', () => {
    const title = component.find('h1')
    expect(title.text()).toContain(`${props.yearsOfExperience} Years of Professional Experience`)
  })

  it('should render a ExperienceItem for each item in the work history', () => {
    const histories = component.find(ExperienceItem)
    expect(histories.length).toBe(props.experience.length)
  })

  it('should set the properties on each ExperienceItem', () => {
    const histories = component.find(ExperienceItem)
    histories.forEach((history, index) => {
      expect(history.prop('history')).toBe(props.experience[index])
    })
  })

  it('should render the bio', () => {
    const bio = component.find(Bio)
    expect(bio).toExist()
  })

  describe('#mapStateToProps', () => {
    let map

    const mockState = {
      mock: 'mockState'
    }
    const mockExperience = [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }]
    const mockYearsOfExperience = 15

    beforeAll(() => {
      experienceOrderByStartSelector.mockReturnValue(mockExperience)
      experienceYearsOfExperienceSelector.mockReturnValue(mockYearsOfExperience)
      map = mapStateToProps(mockState)
    })

    afterAll(() => {
      experienceOrderByStartSelector.mockReset()
      experienceYearsOfExperienceSelector.mockReset()
    })

    it('should select the work history', () => {
      expect(experienceOrderByStartSelector).toHaveBeenCalledWith(mockState)
    })

    it('should select the years of experience', () => {
      expect(experienceYearsOfExperienceSelector).toHaveBeenCalledWith(mockState)
    })

    it('should map the state to the props', () => {
      expect(map).toEqual({
        experience: mockExperience,
        yearsOfExperience: mockYearsOfExperience
      })
    })
  })

  describe('#mapDispatchToProps', () => {
    let map

    const mockDispatch = jest.fn()

    beforeAll(() => {
      map = mapDispatchToProps(mockDispatch)
    })

    it('should map the state to the props', () => {
      expect(map).toEqual({
        getExperience: expect.any(Function)
      })
    })

    describe('#getExperience', () => {
      beforeAll(() => {
        map.getExperience()
      })

      it('should request the stack', () => {
        expect(mockDispatch).toHaveBeenCalledWith(requestExperience())
      })
    })
  })
})
