import Buttons from '~/components/Buttons';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItems = ({ data, onClick }) => {
    return (
        <Buttons className={cx('menu__content-item')} iconbtn={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Buttons>
    );
};

export default MenuItems;