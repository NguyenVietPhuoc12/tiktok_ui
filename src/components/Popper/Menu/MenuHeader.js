import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MenuHeader = ({ title, onBack }) => {
    return (
        <header className={cx('menu__header')}>
            <button className={cx('menu__header-back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('menu__header-title')}>{title}</h4>
        </header>
    );
};

export default MenuHeader;
