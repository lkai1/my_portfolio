import styles from "./About.module.css"
import { useEffect, useState } from "react";
const About = () => {

    const TypewriterText = ({ text, speed = 30, className, reverse }) => {
        const [displayedText, setDisplayedText] = useState("");

        useEffect(() => {
            let cancelled = false;

            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            const type = async () => {
                setDisplayedText("");
                if (reverse) {
                    for (let i = text.length - 1; i >= 0; i--) {
                        if (cancelled) return;

                        setDisplayedText((prev) => text[i] + prev);
                        await sleep(speed);
                    }
                } else {
                    for (let i = 0; i < text.length; i++) {
                        if (cancelled) return;
                        setDisplayedText((prev) => prev + text[i]);
                        await sleep(speed);
                    }
                }
            };

            type();

            return () => {
                cancelled = true;
            };
        }, [text, speed]);

        return <p className={className}>{displayedText}</p>;
    };

    return (
        <div className={styles.main}>
            <img src="/me.png" className={styles.meImg} />
            <div className={styles.aboutContainer}>
                <div className={styles.titleContainer}>
                    <TypewriterText
                        text="Kai Lehtinen"
                        speed={65}
                        className={styles.aboutTitleName}
                        reverse={true}
                    />
                    <TypewriterText
                        text="FullStack developer"
                        speed={40}
                        className={styles.aboutTitle}
                    />
                </div>
                <p className={styles.aboutText}>
                    I am a Mid-level FullStack Developer.
                    I have approximately six years of experience in web and mobile development,
                    gained through personal projects, multiple training programs, internship and freelance work.
                </p>
            </div>
        </div>
    )
}

export default About
