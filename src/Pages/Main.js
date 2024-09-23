import { useEffect, useState } from 'react';
import './Main.css'
import Waitlist from './components/Waitlist';
import hljs from 'highlight.js';
import './dracula.css'
// import "highlight.js/styles/github.css";

function Main() {
    const [isWaitlist, setIsWaitlist] = useState(false);
    const [contactName, setContactName] = useState("");
    const [contactCompany, setContactCompany] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const onChangeContactName = (e) => {
        setContactName(e.target.value);
    }
    const onChangeContactCompany = (e) => {
        setContactCompany(e.target.value);
    }
    const onChangeContactEmail = (e) => {
        setContactEmail(e.target.value);
    }
    const onChangeContactMessage = (e) => {
        setContactMessage(e.target.value);
    }
    const onSubmitContactForm = async (e) => {
        try {
            e.preventDefault();
            console.log({
                "name": contactName,
                "company": contactCompany,
                "email": contactEmail,
                "message": contactMessage
            })
            const response = await fetch("https://round-y.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": contactName,
                    "company": contactCompany,
                    "email": contactEmail,
                    "message": contactMessage
                })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            setContactName("");
            setContactEmail("");
            setContactCompany("");
            setContactMessage("");
            

        } catch (error) {
            console.error("Error posting contact information", error);
        }
    }

    return (
        <div className='main'>
            <div className='main__header white_background'>
                <a className='main__logoLink' href='#starting'><img src={process.env.PUBLIC_URL + '/logo/logo.svg'} alt=''/></a>
                <div className='main__menus'>
                    <a id='menu_starting' href='#starting'><p id='menu_starting' className='main__menu poppins-medium'>HOME</p></a>
                    <a id='menu_features' href='#features'><p id='menu_features' className='main__menu poppins-medium'>FEATURES</p></a>
                    <a id='menu_product' href='#product'><p id='menu_product' className='main__menu poppins-medium'>PRODUCT</p></a>
                    {/* <a href='#partners'><p className='main__menu poppins-medium'>PARTNERS</p></a> */}
                    <a id='menu_contact' href='#contact'><div id='menu_contact' className='main__headerContact main__button blue2_background'>
                        <p id='menu_contact' className='main__menu poppins-medium white'>CONTACT</p>
                    </div></a>
                </div>
            </div>

            <div className='main__starting' id='starting'>
                <p className='main__startingSlogan suse-bold'>Load any datasets within few seconds!</p>
                <pre className='main__startingCode dark1_background'>
                    <code className='language-python'>from round_ai import prepare_dataloader</code>
                    <code className='language-python'>dataloader = prepare_dataloader("allenai/objaverse-xl")</code>
                </pre>
                <div id='waitlist_button' onClick={() => setIsWaitlist(true)} className='main__waitlistButton main__button blue2_background'>
                    <p id='waitlist_button' className='poppins-medium white'>Join Waitlist</p>
                </div>
            </div>
            
            <div className={`main__waitlistBackground ${isWaitlist ? 'main__waitlistBackground--show' : 'main__waitlistBackground--hide'}`}>
                <Waitlist setisWaitlist={x => setIsWaitlist(x)}/>
            </div>

            <div className='main__features'>
                <div className='main__feature'>
                    <img src={process.env.PUBLIC_URL + '/icons/flexibility.svg'} alt=''/>
                    <p className='main__featureTitle suse-bold'>High Flexibility</p>
                    <p className='main__featureDescription poppins-medium'>Edit process however you like<br/>whenever you want!</p>
                </div>
                <div className='main__feature'>
                    <img src={process.env.PUBLIC_URL + '/icons/adaptation.svg'} alt=''/>
                    <p className='main__featureTitle suse-bold'>Auto-Adaptation</p>
                    <p className='main__featureDescription poppins-medium'>Import other's module<br/>without specific changes!</p>
                </div>
                <div className='main__feature'>
                    <img src={process.env.PUBLIC_URL + '/icons/visualization.svg'} alt=''/>
                    <p className='main__featureTitle suse-bold'>Easy Visualization</p>
                    <p className='main__featureDescription poppins-medium'>Monitor the whole process.<br/>Manage flow easier!</p>
                </div>
            </div>

            <div className='main__featuresContainer dark4_background' id='features'>
                <div className='main__visualization'>
                    <div className='main__visualizationTitles'>
                        <p className='main__visualizationsubTitle poppins-medium'>Monitor data changes throughout your pipeline</p>
                        <p className='main__visualizationTitle suse-bold'>Easily Visualize your Data Process</p>
                    </div>
                    <video className='main__visualizationVideo' playsInline autoPlay={true} loop muted>
                        <source src={process.env.PUBLIC_URL + '/videos/visualization.mp4'} type='video/mp4'/>
                    </video>
                </div>

                <div className='main__multienv'>
                    <video className='main__multienvVideo' playsInline autoPlay={true} loop muted>
                        <source src={process.env.PUBLIC_URL + '/videos/multienv.mp4'} type='video/mp4'/>
                    </video>
                    <div className='main__multienvTitles'>
                        <p className='main__multienvsubTitle poppins-medium'>Resolve compatibility issues with multi environments</p>
                        <p className='main__multienvTitle suse-bold'>Set Multi Environments</p>
                    </div>
                </div>
            </div>

            <div className='main__body1' id='product'>
                <div className='main__body1Text'>
                    <p className='main__body1TextTitle suse-bold'>Code Smarter<br/>Visualize Faster</p>
                    <div className='main__body1TextSteps'>
                        <p className='main__body1TextStep poppins-medium'><span className='blue1'>Step 1.</span> Forking</p>
                        <p className='main__body1TextStep poppins-medium'><span className='blue1'>Step 2.</span> Customizing</p>
                        <p className='main__body1TextStep poppins-medium'><span className='blue1'>Step 3.</span> Debugging</p>
                        <p className='main__body1TextStep poppins-medium'><span className='blue1'>Step 4.</span> Uploading</p>
                    </div>
                </div>
                <div className='main__body1ContentBoxes'>
                    <div className='main__body1ContentBox'>
                        <div className='main__body1Content main__body1Content1 dark1_background'>
                            <p className='main__body1ContentTitle suse-medium'><span className='blue2'>01</span> <span className='white'>Forking</span></p>
                            <video width='100%' playsInline autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/videos/forking.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <div className='main__body1ContentBox'>
                        <div className='main__body1Content main__body1Content2 dark2_background'>
                            <p className='main__body1ContentTitle suse-medium'><span className='blue2'>02</span> <span className='white'>Customizing</span></p>
                            <video width='100%' playsInline autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/videos/customizing.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <div className='main__body1ContentBox'>
                        <div className='main__body1Content main__body1Content3 dark3_background'>
                            <p className='main__body1ContentTitle suse-medium'><span className='blue2'>03</span> <span className='white'>Debugging</span></p>
                            <video width='100%' playsInline autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/videos/debugging.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <div className='main__body1ContentBox'>
                        <div className='main__body1Content main__body1Content4 dark4_background'>
                            <p className='main__body1ContentTitle suse-medium'><span className='blue2'>04</span> <span className='white'>Uploading</span></p>
                            <video width='100%' playsInline autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/videos/uploading.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main__partnersContainer dark4_background' id='partners'>
                <div className='main__partners'>
                    <p className='main__partnersTitle suse-bold'>Our Partners</p>
                    <div className='main__partnerLogos'>
                        <img className='main__partnerLogo' alt='' src={process.env.PUBLIC_URL + '/partners/sim2real.svg'}/>
                        {/* <img className='main__partnerLogo' alt='' src={process.env.PUBLIC_URL + '/partners/story.png'}/>
                        <img className='main__partnerLogo' alt='' src={process.env.PUBLIC_URL + '/partners/vessl.png'}/> */}
                    </div>
                </div>
            </div>

            <div className='main__contact' id='contact'>
                <div className='main__contactHeader'>
                    <p className='main__contactTitle suse-bold'>Contact Us!</p>
                    <p className='main__contactSubtitle poppins-medium'>Leave a message for more details and pricing about ROUND!</p>
                </div>
                <form className='main__contactInputs' onSubmit={onSubmitContactForm}>
                    <input className='poppins-medium dark1_background white' type='text' placeholder='Name' value={contactName} onChange={onChangeContactName}/>
                    <input className='poppins-medium dark1_background white' type='text' placeholder='Company / Position' value={contactCompany} onChange={onChangeContactCompany}/>
                    <input className='poppins-medium dark1_background white' type='text' placeholder='Email Address' value={contactEmail} onChange={onChangeContactEmail}/>
                    <textarea className='main__contactMessage poppins-medium dark1_background white' type='textarea' placeholder='Message' value={contactMessage} onChange={onChangeContactMessage}/>
                    <input id='contact_button' className='main__contactSubmit main__button poppins-medium blue2_background white' type='submit' value='SUBMIT'/>
                </form>
            </div>

            <div className='main__footer blue3_background'>
                <p className='poppins-medium blue1'>Spend time in valuable research. We will do the annoying part</p>
            </div>
        </div>
    )
}

export default Main;