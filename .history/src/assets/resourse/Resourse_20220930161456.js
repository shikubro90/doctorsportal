import clock from '../icons/clock.svg'
import marker from '../icons/marker.svg'
import phone from '../icons/phone.svg'

import cavity from '../images/cavity.png'
import fluorid from '../images/fluoride.png'
import whitening from '../images/whitening.png'

import doctor from '../images/doctor.png'
import treatment from '../images/treatment.png'

export const miniCard = [
  {
    id: 0,
    icon: clock,
    title: 'Opening Hours',
    disc: 'Lorem Ipsum is simply dummy text of the pri',
    style: 'bg-gradient-to-r from-secondary to-primary text-white',
  },

  {
    id: 1,
    icon: marker,
    title: 'Visit our location',
    disc: 'Lorem Ipsum is simply dummy text of the pri',
    style: 'bg-[#3A4256] text-white',
  },

  {
    id: 2,
    icon: phone,
    title: 'Contact us now',
    disc: 'Lorem Ipsum is simply dummy text of the pri',
    style: 'bg-gradient-to-r from-secondary to-primary text-white',
  },
]

export const serviceMiniCard = [
  {
    id: 0,
    icon: cavity,
    title: 'Fluoride Treatment',
    disc:
      'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    style: '',
  },
  {
    id: 1,
    icon: fluorid,
    title: 'Cavity Filling',
    disc:
      'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    style: '',
  },
  {
    id: 2,
    icon: whitening,
    title: 'Teeth Whitening',
    disc:
      'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    style: '',
  },
]

export const appointment = [
  {
    id: 0,
    image: doctor,
    title: 'Exceptional Dental Care, on Your Terms',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    button_text: 'Get Start',
  },
  {
    id: 1,
    image: treatment,
    title: '',
    desc: '',
    button_text: 'Get Start',
  },
]
