import { useEffect, useState } from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBitcoinSign,
    faCircleXmark,
    faCloudArrowUp,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faPlus,
    faQuestionCircle,
    faSignOut,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';

// Tippy library
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Style CSS
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// Components necessary for Header
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Buttons from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';

// Constants
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Vietnamese',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    codeISO: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    codeISO: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    codeISO: '',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    codeISO: '',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    type: 'language',
                    codeISO: '',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    codeISO: '',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    codeISO: '',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    type: 'language',
                    codeISO: '',
                    title: 'Español',
                },
                {
                    type: 'language',
                    codeISO: '',
                    title: 'Français',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const currentUserLogin = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            title: 'Feedback and Help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {};

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header__content')}>
                <div className={cx('header__content-logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div>
                    <HeadlessTippy
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
                    </HeadlessTippy>
                </div>
                <div className={cx('header__content-actions')}>
                    {currentUserLogin ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('header__content-actions-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('header__content-actions-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('header__content-actions-btn')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className={cx('header__content-actions-notif')}>0</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Buttons iconbtn={<FontAwesomeIcon icon={faPlus} />} text="true">
                                Upload
                            </Buttons>
                            <Buttons primary="true">Login</Buttons>
                        </>
                    )}
                    <Menu items={currentUserLogin ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUserLogin ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7159829341814128646~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1714190400&x-signature=L3DPk8y94OhM7do5Q7zyCyc92PY%3D"
                                className={cx('user__login-avatar')}
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('header__content-actions-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
