import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { FC, useMemo } from 'react';
import cls from './ProcessProgress.module.scss';
import Blob from './../../../../public/icons/blob.svg';
import Image from 'next/image';

const MINIMUM_PROCESS_STEPS = 2;

interface ProcessProgressProps {
    labels: string[];
    currentStage: number;
    className?: string;
}

export const ProcessProgress: FC<ProcessProgressProps> = (props) => {
    const {
        labels,
        currentStage,
        className
    } = props; 

    const mods: Mods = {
        [cls.active]: currentStage > 1,
        [cls.current]: currentStage == 1
    };    

    return labels.length - 1 >= MINIMUM_PROCESS_STEPS
        ? (
            <div className={classNames(cls.wrapper, {}, [className])}>
                <div className={cls.block}>
                    <button className={classNames(cls.dot, mods, [])}/>
                    <span className={classNames(cls.label, mods)}>
                        {labels[0]}
                    </span>
                </div> 
                {
                    labels.slice(1).map((label, idx) => {
                        const mods: Mods = {
                            [cls.active]: ++idx < currentStage,
                            [cls.current]: ++idx === currentStage
                        };

                        return (
                            <div key={idx} className={classNames(cls.wrapper)}>
                                <span className={classNames(cls.bar, mods)}/>
                                <div className={cls.block}>
                                    <button className={classNames(cls.dot, mods)}/>
                                    <span className={classNames(cls.label, mods)}>{label}</span>
                                </div>
                            </div>
                    );})
                }
                <Image 
                    src={Blob} 
                    alt=''
                    role='presentation'
                    className={cls.blob}
                />
            </div>
        )
        : null;
};