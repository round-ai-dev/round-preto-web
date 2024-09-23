import { useState } from 'react';
import './Waitlist.css';

function WaitlistMain({setisWaitlist, setPopupState}) {
    return (
        <div className='waitlistMain white_background'>
            <div className='waitlistMain__header'>
                <p className='waitlistMain__title suse-bold'>Waitlist</p>
                <p className='waitlistMain__subtitle poppins-medium'>We will be launching our product in January, 2025.<br/>If you are interested, book ROUND or leave your e-mail to follow up with us!</p>
            </div>
            <div className='waitlistMain__plans'>
                <div className='waitlistMain__plan'>
                    <p className='waitlistMain__planName suse-medium dark1'>Leave your e-mail</p>
                    <p className='waitlistMain__planPrice poppins-semibold dark1'>$0</p>
                    <div className='waitlistMain__properties'>
                        <div className='waitlistMain__property'>
                            <img alt='' src={process.env.PUBLIC_URL + '/icons/check_ring_dark.svg'}/>
                            <p className='poppins-medium dark1'>Get followup news</p>
                        </div>
                        <div className='waitlistMain__property'>
                            <img alt='' src={process.env.PUBLIC_URL + '/icons/check_ring_dark.svg'}/>
                            <p className='poppins-medium dark1'>Try out beta version</p>
                        </div>
                        <div className='waitlistMain__property'>
                            <img alt='' src={process.env.PUBLIC_URL + '/icons/check_ring_dark.svg'}/>
                            <p className='poppins-medium dark1'>Get betatesting notifications</p>
                        </div>
                    </div>
                    <div onClick={() => setPopupState(1)} className='waitlistMain__planButton dark1_background'>
                        <p className='white poppins-semibold'>Leave e-mail</p>
                    </div>
                </div>
                <div className='waitlistMain__plan dark1_background'>
                    <p className='waitlistMain__planName suse-medium white'>Book ROUND</p>
                    <p className='waitlistMain__planPrice poppins-semibold white'>$15</p>
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
                    <a className='waitlistMain__bookLink' href='https://www.buymeacoffee.com/round' target='_blank' rel="noreferrer"><div className='waitlistMain__planButton white_background'>
                        <p className='dark1 poppins-semibold'>Start Booking</p>
                    </div></a>
                </div>
            </div>

            <img onClick={() => {setisWaitlist(false); setPopupState(0);}} className='waitlistMain__exit' alt='' src={process.env.PUBLIC_URL + '/icons/exit.svg'}/>
        </div>
    )
}

function WaitlistEmail({setPopupState}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onSubmitForm = async() => {
        try {
            const response = await fetch("http://100.25.46.65:8010/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)

            setName("");
            setEmail("");
        } catch (error) {
            console.error("Error posting waitlist email:", error)
        }
    }

    return (
        <div className='waitlistEmail white_background'>
            <div className='waitlistEmail__header dark1_background'>
                <img onClick={() => setPopupState(0)} className='waitlistEmail__exit' alt='' src={process.env.PUBLIC_URL + '/icons/exit_bright.svg'}/>
            </div>

            <div className='waitlistEmail__starting'>
                <p className='waitlistEmail__title suse-semibold'>Leave E-mail</p>
                <p className='waitlistEmail__subtitle poppins-medium'>Leave your email, and we will update you with exciting news about ROUND.</p>
            </div>

            <div className='waitlistEmail__inputs'>
                <div className='waitlistEmail__input'>
                    <p className='waitlistEmail__inputName poppins-medium'>name:</p>
                    <div className='waitlistEmail__inputHolder dark1_background'><input className='white' type='text' onChange={onChangeName} value={name}/></div>
                </div>
                <div className='waitlistEmail__input'>
                    <p className='waitlistEmail__inputName poppins-medium'>e-mail:</p>
                    <div className='waitlistEmail__inputHolder dark1_background'><input className='white' type='text' onChange={onChangeEmail} value={email}/></div>
                </div>
            </div>

            <div className='waitlistEmail__submitButton dark2_background' onClick={onSubmitForm}>
                <p className='poppins-medium white'>Submit</p>
            </div>
        </div>
    )
}

function Waitlist({setisWaitlist}) {
    const [popupState, setPopupState] = useState(0);

    return (
        <div className="waitlist">
            <div className={`waitlist__main ${popupState === 0 ? 'waitlist__main--show' : 'waitlist__main--hide'}`}>
                <WaitlistMain setisWaitlist={x => setisWaitlist(x)} setPopupState={x => setPopupState(x)} />
            </div>

            <div className={`waitlist__email ${popupState === 1 ? 'waitlist__email--show' : 'waitlist__email--hide'}`}>
                <WaitlistEmail setPopupState={x => setPopupState(x)} />
            </div>
        </div>
    )
}

export default Waitlist;