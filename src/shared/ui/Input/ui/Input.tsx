'use client';

import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import {
    ChangeEvent, 
    FC, 
    InputHTMLAttributes, 
    memo,
    useRef,
    useEffect
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

type InputType = 'text' | 'number';

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    readonly?: boolean
    label?: string;
    type?: InputType;
    onChange?: (value: string | number) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        readonly,
        label,
        autoFocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);


    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.isLabel]: !!label,
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, valueAsNumber} = e.target;
        const newValue = type === 'number' ? valueAsNumber : value;
        onChange?.(newValue);
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            <label className={cls.label}>
                {label && <span>{label}</span> }
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    readOnly={readonly}
                    className={classNames(cls.input, mods)}
                    {...otherProps}
                />
            </label>
        </div>
    );
});
