import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

type ButtonTheme  = 'primary' | 'accent'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    theme?: ButtonTheme;
    className?: string;
    disabled?: boolean;
    small?: boolean;
    big?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        children,
        className,
        theme = 'primary',
        disabled,
        small = false,
        big = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.smallBtn]: small,
        [cls.bigBtn]: big
    };

    return (
        <button
            type="button"
            className={classNames(cls.btn, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
