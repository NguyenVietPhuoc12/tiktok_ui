import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header__content')}>
                <div className={cx('header__content-logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('header__content-search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('header__content-clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon
                        style={{ display: 'none' }}
                        className={cx('header__content-loading')}
                        icon={faSpinner}
                    />
                    <button className={cx('header__content-search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('header__content-actions')}>
                    <button>Upload</button>
                    <button>Log in</button>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </header>
    );
};

export default Header;
