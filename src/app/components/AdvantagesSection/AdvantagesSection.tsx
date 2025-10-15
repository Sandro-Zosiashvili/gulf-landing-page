// AdvantagesSection.jsx
"use client"
import { useEffect, useRef } from 'react';
import styles from './Advantagessection.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AdvantagesSection = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className={styles.container}>
        </div>
    )
}

export default AdvantagesSection