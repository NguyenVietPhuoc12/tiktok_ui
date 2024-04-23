import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Buttons from '~/components/Buttons';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header__content')}>
                <div className={cx('header__content-logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div>
                    <Tippy
                        visible={searchResult.length > 0}
                        interactive
                        render={(attrs) => {
                            return (
                                <div className={cx('header__content-search-result')} tabIndex="-1">
                                    <PopperWrapper>
                                        <h4 className={cx('search__result-title')}>Accounts</h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            );
                        }}
                    >
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
                    </Tippy>
                </div>
                <div className={cx('header__content-actions')}>
                    <Buttons iconbtn={<FontAwesomeIcon icon={faPlus} />} text="true">
                        Upload
                    </Buttons>
                    <Buttons primary="true">Login</Buttons>
                    <FontAwesomeIcon style={{ fontSize: '1.8rem', color: '#000000' }} icon={faEllipsisVertical} />
                </div>
            </div>
        </header>
    );
};

export default Header;
