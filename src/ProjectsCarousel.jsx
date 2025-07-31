import styles from "./ProjectsCarousel.module.css"
import { useRef, useState, useEffect } from "react"

const ProjectsCarousel = () => {

    const images = [
        "/bonus_fun.png",
        "/flierchat.png",
        "/kenny.png",
        "/wallet_track.png"
    ]
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    const goTo = (index) => {
        const total = images.length;
        setCurrentIndex((index + total) % total);
    };

    const updateSlideWidth = () => {
        if (wrapperRef.current) {
            setSlideWidth(wrapperRef.current.clientWidth);
        }
    };

    useEffect(() => {
        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => window.removeEventListener('resize', updateSlideWidth);
    }, []);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
    }, [currentIndex, slideWidth]);

    useEffect(() => {
        const interval = setInterval(() => {
            goTo(currentIndex + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className={styles.carousel}>
            <div className={styles.trackWrapper} ref={wrapperRef}>
                <div
                    className={styles.track}
                    ref={trackRef}
                    style={{ width: `${images.length * slideWidth}px` }}
                >
                    {images.map((src, i) => (
                        <div
                            className={styles.slide}
                            key={i}
                            style={{ width: `${slideWidth}px` }}
                        >
                            <img src={src} alt={`Slide ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button className={`${styles.btn} ${styles.prev}`} onClick={() => goTo(currentIndex - 1)}>{"<"}</button>
            <button className={`${styles.btn} ${styles.next}`} onClick={() => goTo(currentIndex + 1)}>{">"}</button>
        </div>
    );
}

export default ProjectsCarousel