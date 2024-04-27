import { useState, forwardRef } from 'react';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErrorImage = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            ref={ref}
            alt={alt}
            onError={handleErrorImage}
        />
    );
});

export default Image;
