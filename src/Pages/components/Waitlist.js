import { useState } from 'react';
import './Waitlist.css'

function WaitlistMain() {
    return (
        <div className='waitlistMain'>
            <div className='waitlistMain__header'>
                <p className='waitlistMain__title poppins-semibold'>Waitlist</p>
                <p className='waitlistMain__subtitle poppins-medium'>We will be launching our product in January, 2025.<br/>If you are interested, book ROUND or leave your e-mail to follow up with us!</p>
            </div>
            <div className='waitlistMain__plans'>
                <div className='waitlistMain__plan'>
                    <p className='waitlistMain__planName poppins-medium dark1'>Leave your e-mail</p>
                    <p className='waitlistMain__planPrice poppins-semibold dark1'>$0</p>
                    <div className='waitlistMain__properties'>
                        <div className='waitlistMain__property'>
                            <img alt='' src={process.env.PUBLIC_URL + '/icons/check_ring_dark.svg'}/>
                            <p className='poppins-medium dark1'>Get followup news</p>
                        </div>
                    </div>
                    <div className='waitlistMain__planButton dark1_background'>
                        <p className='white poppins-semibold'>Leave e-mail</p>
                    </div>
                </div>
                <div className='waitlistMain__plan dark1_background'>
                    <p className='waitlistMain__planName poppins-medium white'>Book ROUND</p>
                    <p className='waitlistMain__planPrice poppins-semibold white'>$10</p>
                    <div className='waitlistMain__properties'>
                        <div className='waitlistMain__property'>
                            <img alt='' src={process.env.PUBLIC_URL + '/icons/check_ring_white.svg'}/>
                            <p className='poppins-medium white'>1 year use when released</p>
                        </div>
                        <div className='waitlistMain__property'>
                            <img alt='' src={process.env.PUBLIC_URL + '/icons/check_ring_white.svg'}/>
                            <p className='poppins-medium white'>80% discount</p>
                        </div>
                        <div className='waitlistMain__property'>
                            <img alt='' src={process.env.PUBLIC_URL + '/icons/check_ring_white.svg'}/>
                            <p className='poppins-medium white'>Get followup news</p>
                        </div>
                    </div>
                    <div className='waitlistMain__planButton white_background'>
                        <p className='dark1 poppins-semibold'>Start Booking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WaitlistEmail() {
    return (
        <div className='waitlistEmail'>
            email
        </div>
    )
}

function Waitlist({setisWaitlist}) {
    const [popupState, setPopupState] = useState(1);

    return (
        <div className="waitlist white_background">
            <div className={`waitlist__main ${popupState === 0 ? 'waitlist__main--show' : 'waitlist__main--hide'}`}>
                <WaitlistMain />
            </div>

            <div className={`waitlist__email ${popupState === 1 ? 'waitlist__email--show' : 'waitlist__email--hide'}`}>
                <WaitlistEmail />
            </div>

            <img onClick={() => {setisWaitlist(false); setPopupState(0);}} className='waitlist__exit' alt='' src={process.env.PUBLIC_URL + '/icons/exit.svg'}/>
        </div>
    )
}

export default Waitlist;