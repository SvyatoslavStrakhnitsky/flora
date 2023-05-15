import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { FC, ReactNode } from 'react';
import cls from './Text.module.scss';

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type TextTheme = 'primary' | 'accent';
type TextSizeType = 'small' | 'normal' | 'large';
type TextWeightType = 'w300' | 'w400' | 'w500' | 'w600' | 'w700';

interface TextProps {
    children: ReactNode;
    weight?: TextWeightType;
    size?: TextSizeType;
    tag?: TextType;
    theme?: TextTheme;
    className?: string;
    dots?: boolean;
}

export const Text: FC<TextProps> = (props) => {
    const {
        tag = 'p',
        theme = 'primary',
        size = 'normal',
        weight = 'w400',
        children,
        className,
        dots
    } = props;

    const Tag = tag;  

    return (
        <Tag className={classNames('', {}, [
            className, 
            cls[theme],
            cls[size],
            cls[weight]
            ])}>
            {children}
        </Tag>
    );
};