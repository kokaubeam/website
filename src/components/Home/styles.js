import styled from 'styled-components'
import meImage from '../../media/me.jpg'
import laptopImage from './media/laptop.jpg'

export const Container = styled.div`
  position: absolute;
  top: 42;
  left: 0;
  background: #000;
  text-align: center;
  /* margin: -16px 0 0 -16px;
  padding: 16px 0; */
  width: 100vw;
  height: 100%;
`

export const Heading = styled.h1`
  text-align: center;
`

export const ProfilePicture = styled.img.attrs({
  src: meImage,
  alt: 'Jonathan Davis',
})`
  display: block;
  border-radius: 96px;
  border: 4px solid #979797;
  width: 192px;
  max-width: 100%;
  margin: 16px auto;

  @media (min-width: 224px) {
    height: 192px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const LaptopImage = styled.img.attrs({
  src: laptopImage,
  alt:
    'Laptop, partially closed, with colorful lights expressed from the display reflecting off the keyboard.',
})`
  display: block;
  margin: 0 auto -12%;
  width: 90%;

  @media (min-width: 1024px) {
    margin-bottom: -160px;
    width: 1024px;
    height: 460px;
  }
`

export const Introduction = styled.div`
  margin: 0 auto;
  max-width: 500px;
`

export const Greeting = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
