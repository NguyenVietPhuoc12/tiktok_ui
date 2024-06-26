import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Buttons.module.scss';

const cx = classNames.bind(styles);

const Buttons = ({
    to,
    href,
    onClick,
    text,
    primary = false,
    disabled = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    children,
    className,
    iconbtn,
    ...restProps
}) => {
    let Component = 'button';
    const props = { onClick, ...restProps };

    // handle logic remove event listener on btn is disabled!
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disabled,
        rounded,
        text,
        small,
        iconbtn,
        large,
    });

    return (
        <div>
            <Component className={classes} {...props}>
                {iconbtn && <span className={cx('icon')}>{iconbtn}</span>}
                <span className={cx('title')}>{children}</span>
            </Component>
        </div>
    );
};

Buttons.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    iconbtn: PropTypes.node,
};

export default Buttons;
