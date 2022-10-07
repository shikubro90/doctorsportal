import bg from '../../assets/images/appointment.png'
import ButtonPrimary from '../../Shared/ButtonPrimary'

const Newsletter = () => {
  return (
    <div className="main py-20" style={{ background: `url(${bg})` }}>
      <div className="container flex flex-col items-center justify-center">
        <div className="headingPart flex flex-col items-center justify-center">
          <h4 className='font-semibold text-primary uppercase'>Contact Us</h4>
          <h2 className='text-[30px] text-white mb-5'>Stay connected with us</h2>
        </div>
        <div className="bodyPart flex flex-col items-center justify-center">
          <form action="" className="flex flex-col items-center justify-center">
            <input className='w-[450px] rounded-md outline-none text-accent font-semibold px-5 py-4 mb-2' type="email" placeholder="Email Address" />
            <input className='w-[450px] rounded-md outline-none text-accent font-semibold px-5 py-4 mb-2' type="text" placeholder="subject" />
            <textarea placeholder='Your Message' className=' mb-4 w-[450px] rounded-md outline-none text-accent font-semibold px-5 py-4' name="" id="" cols="auto" rows="auto"></textarea>
            <ButtonPrimary>{'Submit'}</ButtonPrimary>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
