import { useState } from 'react';
import './Waitlist.css'

function WaitlistMain({setisWaitlist, setPopupState}) {
    return (
        <div className='waitlistMain white_background'>
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
                    <div onClick={() => setPopupState(1)} className='waitlistMain__planButton dark1_background'>
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
                    <div onClick={() => setPopupState(2)} className='waitlistMain__planButton white_background'>
                        <p className='dark1 poppins-semibold'>Start Booking</p>
                    </div>
                </div>
            </div>

            <img onClick={() => {setisWaitlist(false); setPopupState(0);}} className='waitlist__exit' alt='' src={process.env.PUBLIC_URL + '/icons/exit.svg'}/>
        </div>
    )
}

function WaitlistEmail({setPopupState}) {
    return (
        <div className='waitlistEmail white_background'>
            <div className='waitlistEmail__header'>
                <p className='waitlistEmail__title poppins-semibold'>Leave E-mail</p>
                <p className='waitlistEmail__subtitle poppins-medium'>Leave your email, and we will update you with exciting news about ROUND.</p>
            </div>

            <img onClick={() => setPopupState(0)} className='waitlist__exit' alt='' src={process.env.PUBLIC_URL + '/icons/exit.svg'}/>
        </div>
    )
}

function Waitlist({setisWaitlist}) {
    const [popupState, setPopupState] = useState(1);

    return (
        <div className="waitlist">
            <div className={`waitlist__main ${popupState === 0 ? 'waitlist__main--show' : 'waitlist__main--hide'}`}>
                <WaitlistMain setisWaitlist={x => setisWaitlist(x)} setPopupState={x => setPopupState(x)} />
            </div>

            <div className={`waitlist__email ${popupState === 1 ? 'waitlist__email--show' : 'waitlist__email--hide'}`}>
                <WaitlistEmail setisWaitlist={x => setisWaitlist(x)} setPopupState={x => setPopupState(x)} />
            </div>
        </div>
    )
}

export default Waitlist;