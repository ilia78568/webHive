import styles from './styles.module.scss'
import {Image} from "../Image";
import {ImageTypes} from "../Image/constants";
import React, {useEffect, useState} from "react";
import {mainText as text} from "./contants";
import Carousel from "./Carousel/Carousel";


const FirstBlocksView = () => {
    return (
        <div className={styles.firstBlockView}>
            <div className={`${styles.blockView} ${styles.firstBlockView1}`}/>
            <div className={`${styles.blockView} ${styles.firstBlockView2}`}/>
            <div className={`${styles.blockView} ${styles.firstBlockView3}`}/>
            <div className={`${styles.blockView} ${styles.firstBlockView4}`}/>
        </div>
    )
}
const SecondBlocksView = () => {
    return (
        <div className={styles.secondBlockView}>
            <div className={`${styles.blockView} ${styles.secondBlocksView1}`}/>
            <div className={`${styles.blockView} ${styles.secondBlocksView2}`}/>
            <div className={`${styles.blockView} ${styles.secondBlocksView3}`}/>
        </div>
    )
}
const ThirdBlockView = () => {
    return (
        <div className={styles.thirdBlockView}>
            <div className={`${styles.blockView} ${styles.thirdBlockView1}`}/>
            <div className={`${styles.blockView} ${styles.thirdBlockView2}`}/>
        </div>
    )
}

const Intro = () => {
    const [step, setStep] = useState(0)

    useEffect(()=> {
        let interval = setInterval(()=> {
            if(step === 3) {
                setStep( 0)
            } else {
                setStep(prev => prev + 1)
            }
        }, 4000)
        return () => clearInterval(interval)
    })

    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Image type={ImageTypes.companyLogo} className={styles.logoFirst}/>
                        <Image type={ImageTypes.companyName} className={styles.logoSecond}/>
                    </div>
                    <div >Need Help?</div>
                </div>
                <div className={styles.mainBlock}>
                    <Carousel step={step} setStep={setStep}>
                        <h2 className={styles.mainText}>{text.firstStepText} <span className={styles.mainTextColored}>{text.firstStepTextColored}</span></h2>
                        <h2 className={styles.mainText}>{text.secondStepText} <span className={styles.mainTextColored}>{text.secondStepTextColored}</span></h2>
                        <h2 className={styles.mainText}>{text.thirdStepText} <span className={styles.mainTextColored}>{text.thirdStepTextColored}</span></h2>
                        <h2 className={styles.mainText}>{text.fourthStepText} <span className={styles.mainTextColored}>{text.fourthStepTextColored}</span></h2>
                    </Carousel>
                    <div className={styles.stepper}>
                        <div className={`${styles.stepperCircle} ${step === 0 && styles.stepperCircleSelected}`} onClick={() => setStep(0)}/>
                        <div className={`${styles.stepperCircle} ${step === 1 && styles.stepperCircleSelected}`} onClick={() => setStep(1)}/>
                        <div className={`${styles.stepperCircle} ${step === 2 && styles.stepperCircleSelected}`} onClick={() => setStep(2)}/>
                        <div className={`${styles.stepperCircle} ${step === 3 && styles.stepperCircleSelected}`} onClick={() => setStep(3)}/>
                    </div>
                    <div className={styles.buttons}>
                        <div>Button</div>
                        <div>Button</div>
                    </div>
                    <div className={styles.privacyBlock}>
                        <h4>privact</h4>
                        <h4>privact</h4>
                    </div>
                </div>

            </div>
            <div className={styles.blocks}>
                <Image className={styles.blocksMask} type={ImageTypes.maskGroup}/>

                <div >
                    {step === 0 && <FirstBlocksView/>}
                    {step === 1 && <SecondBlocksView/>}
                    {step === 2 && <ThirdBlockView/>}
                    {step === 3 && <FirstBlocksView/>}
                </div>


            </div>
        </div>
    )
}


export default Intro