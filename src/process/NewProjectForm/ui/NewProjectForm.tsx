import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { forwardRef } from 'react';
import { FirstStep } from './FirstStep';
import {SecondStep} from './SecondStep';
import {ThirdStep} from './ThirdStep';
import { chips, goals, launches } from '@/shared/mocks';
import cls from './FormSteps.module.scss';

interface NewProjectFormProps {
    stage: number;
    onNextScreenShow: () => void;
    onPrevScreenShow: () => void;
}

export const NewProjectForm = forwardRef<HTMLDivElement, NewProjectFormProps>((props, ref) => {
    const {
        stage,
        onNextScreenShow,
        onPrevScreenShow
    } = props;

    return (
        <div className={classNames(cls.screen)} ref={ref}>
            <FirstStep 
                stage={stage}
                chips={chips} 
                onNextScreenShow={onNextScreenShow}
                    />
            <SecondStep 
                goals={goals}
                onNextScreenShow={onNextScreenShow}
                onPrevScreenShow={onPrevScreenShow}
            />
            <ThirdStep
                launches={launches}
                onPrevScreenShow={onPrevScreenShow}
            />
        </div>
    );
});