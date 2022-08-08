import styles from './styles.module.scss'
import React, {useState} from "react";

type setStepСlb = (step: number) => number

interface ICarouselProps {
    step: number;
    setStep: (step: number | setStepСlb) => void;
    children: React.ReactNode
}

const Carousel = ({step, setStep, children} : ICarouselProps) => {
    const [touchPosition, setTouchPosition] = useState(null)
    const handleTouchStart = (e: any) => {
        const touchDown = e.clientX
        setTouchPosition(touchDown)
    }

    const next = () => {
        if (step < 3) {
            setStep((prevState: number) => prevState + 1)
        } else {
            setStep(0)
        }
    }
    const prev = () => {
        if (step > 0) {
            setStep((prevState: number) => prevState - 1)
        }
    }
    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }
        const currentTouch = e.clientX
        const diff = touchDown - currentTouch

        if (diff > 25) {
            next()
        }

        if (diff < -25) {
            prev()
        }
        setTouchPosition(null)
    }

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                <div className={styles.carouselContentWrapper}  onMouseDown={handleTouchStart} onMouseUp={handleTouchMove}>
                    <div className={styles.carouselContent}  style={{ transform: `translateX(-${step * 100}%)` }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel