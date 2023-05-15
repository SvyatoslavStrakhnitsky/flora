import {Text} from '@/shared/ui/Text';
import { FC } from 'react';
import cls from './FormSteps.module.scss';

interface StepHeaderProps {
    header: string;
    subHeader: string;
}

export const StepHeader: FC<StepHeaderProps> = (props) => {
    const {
        header,
        subHeader
    } = props;

    return (
        <>
            <Text tag='h2' theme='accent' size='small' className={cls.text}>
                {subHeader}
            </Text>
            <Text tag='h1' size='large' weight='w500' className={cls.title}>
                {header}
            </Text>
        </>
    );
};