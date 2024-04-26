import Buttons from '~/components/Buttons';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItems = ({ data, onClick }) => {
    const classes = cx('menu__content-item', {
        separate: data.separate,
    });

    return (
        <Buttons className={classes} iconbtn={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Buttons>
    );
};

export default MenuItems;
