import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { FC, useCallback, useEffect, useState } from 'react';
import {Button} from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';
import cls from './NumberField.module.scss';

interface NumberFieldProps {
    value?: number; 
    className?: string;
    min?: number;
    max?: number;
    onChange: (value: number) => void;
}

export const NumberField: FC<NumberFieldProps> = (props) => {
    const {
        value = 0,
        className,
        min = 0,
        max = 100,
        onChange
    } = props;

    const [number, setNumber] = useState(value);

    const validate = useCallback((value: number) => 
            min <= value && value <= max, [min, max]);

    const decrement = useCallback(() => {
        setNumber(prev => validate(prev - 1) ? prev - 1 : prev);
    }, [validate]);

    const increment = useCallback(() => {
        setNumber(prev => validate(prev + 1) ? prev + 1 : prev);
    }, [validate]);

    useEffect(() => {
        onChange(number);
    }, [number, onChange]);

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <Button onClick={decrement}>-</Button>
            <Input 
                type='number' 
                value={number} 
                disabled
            />
            <Button onClick={increment}>+</Button>
        </div>
    );
};