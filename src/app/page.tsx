'use client';

import { ProcessProgress } from '@/widgets/ProcessProgress';
import { useCallback, useRef, useState } from 'react';
import { NewProjectForm } from '@/process/NewProjectForm';
import cls from './page.module.scss';
import { processes } from '@/shared/mocks';

const screens = new Array(3).fill(0);

export default function Home() {
    const [stage, setStage] = useState(1);

    const screenRef = useRef<HTMLDivElement | null>(null);

    const nextScreen = useCallback(() => {
        if (screenRef.current) {
            setStage(prev => prev + 1);
            const styles = screenRef.current.style;

            if (window.screen.width < 680) {
                styles.transform = `translateX(calc(-${100 * stage}vw))`;
            } else {
                styles.transform = `translateY(calc(-${100 * stage}vh))`;
            }
        }
    }, [stage]);

    const prevScreen = useCallback(() => {
        if (screenRef.current) {
            setStage(prev => prev - 1);
            const styles = screenRef.current.style;

            if (window.screen.width < 680) {
                styles.transform = 
                    `translateX(calc(${100 * (screens.length - 1) -  100 * stage}vw))`; 
            } else {
                styles.transform = 
                    `translateY(calc(${100 * (screens.length - 1) -  100 * stage}vh))`; 
            }  
        }
    }, [stage]);

    return (
        <main className={cls.main}>
            <aside className={cls.process}>
                <ProcessProgress 
                    labels={processes} 
                    currentStage={stage}
                />
            </aside>
            <NewProjectForm 
                ref={screenRef}
                stage={stage}
                onNextScreenShow={nextScreen}
                onPrevScreenShow={prevScreen}
            />
        </main>
    );
}
