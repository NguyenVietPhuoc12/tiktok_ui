// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faPlus,
    faQuestionCircle,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

// Tippy library
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Style CSS
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// Components necessary for Header
import images from '~/assets/images';

import Buttons from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, SendIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/layouts/components/Search';

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

    const handleMenuChange = (menuItem) => {};

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header__content')}>
                <div className={cx('header__content-logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Search />
                <div className={cx('header__content-actions')}>
                    {currentUserLogin ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('header__content-actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('header__content-actions-btn')}>
                                    <SendIcon className={cx('send__icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('header__content-actions-btn')}>
                                    <InboxIcon />
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
                            <Image
                                src="~/assets/images/user_avatar.jpeg"
                                className={cx('user__login-avatar')}
                                alt="avatar"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7159829341814128646~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1714359600&x-signature=v3As9CIBuhW0A1vUghr0CxPDDCU%3D"
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
