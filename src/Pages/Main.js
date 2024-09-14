import { useState } from 'react';
import './Main.css'
import Waitlist from './components/Waitlist';

function Main() {
    const [isWaitlist, setIsWaitlist] = useState(false)
    return (
        <div className='main'>
            <div className='main__header white_background'>
                <img src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt=''/>
                <div className='main__headerContact blue2_background'>
                    <p className='poppins-medium white'>Contact</p>
                </div>
            </div>

            <div className='main__starting'>
                <p className='main__startingSlogan poppins-semibold'>Easy Data Preparation</p>
                <p className='main__startingExplanation poppins-regular'>Empower your data journey with high flexibility,<br/>easy visualization, and a developer-friendly data preparation tool</p>
                <div onClick={() => {console.log(isWaitlist); setIsWaitlist(true);}} className='main__waitlistButton blue2_background'>
                    <p className='poppins-medium white'>Join Waitlist</p>
                </div>
            </div>

            
            <div className={`main__waitlistBackground ${isWaitlist ? 'main__waitlistBackground--show' : 'main__waitlistBackground--hide'}`}>
                <Waitlist setisWaitlist={x => setIsWaitlist(x)}/>
            </div>

            <div className='main__features'>
                <div className='main__feature'>
                    <img src={process.env.PUBLIC_URL + '/icons/flexibility.svg'} alt=''/>
                    <p className='main__featureTitle poppins-semibold'>High Flexibility</p>
                    <p className='main__featureDescription poppins-medium'>Edit process however you like<br/>whenever you want!</p>
                </div>
                <div className='main__feature'>
                    <img src={process.env.PUBLIC_URL + '/icons/adaptation.svg'} alt=''/>
                    <p className='main__featureTitle poppins-semibold'>Auto-Adaptation</p>
                    <p className='main__featureDescription poppins-medium'>Import other's module<br/>without specific changes!</p>
                </div>
                <div className='main__feature'>
                    <img src={process.env.PUBLIC_URL + '/icons/visualization.svg'} alt=''/>
                    <p className='main__featureTitle poppins-semibold'>Easy Visualization</p>
                    <p className='main__featureDescription poppins-medium'>Monitor the whole process.<br/>Manage flow easier!</p>
                </div>
            </div>

            <div className='main__body1'>
                <div className='main__body1Text'>
                    <p className='main__body1TextTitle poppins-semibold'>Amazing User<br/>Experience with<br/>ROUND</p>
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
                            <p className='main__body1ContentTitle poppins-medium'><span className='blue2'>01</span> <span className='white'>Forking</span></p>
                            <video width='100%' autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/steps/forking.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <div className='main__body1ContentBox'>
                        <div className='main__body1Content main__body1Content2 dark2_background'>
                            <p className='main__body1ContentTitle poppins-medium'><span className='blue2'>02</span> <span className='white'>Customizing</span></p>
                            <video width='100%' autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/steps/customizing.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <div className='main__body1ContentBox'>
                        <div className='main__body1Content main__body1Content3 dark3_background'>
                            <p className='main__body1ContentTitle poppins-medium'><span className='blue2'>03</span> <span className='white'>Debugging</span></p>
                            <video width='100%' autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/steps/debugging.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <div className='main__body1ContentBox'>
                        <div className='main__body1Content main__body1Content4 dark4_background'>
                            <p className='main__body1ContentTitle poppins-medium'><span className='blue2'>04</span> <span className='white'>Uploading</span></p>
                            <video width='100%' autoPlay={true} loop muted>
                                <source src={process.env.PUBLIC_URL + '/steps/uploading.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;