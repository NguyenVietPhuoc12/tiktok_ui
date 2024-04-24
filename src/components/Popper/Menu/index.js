import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Menu.module.scss';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItems key={index} data={item} />;
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                placement="bottom-end"
                interactive
                delay={[0, 500]}
                render={(attrs) => {
                    return (
                        <div className={cx('menu__content')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('menu__popper')}>{renderItems()}</PopperWrapper>
                        </div>
                    );
                }}
            >
                {children}
            </Tippy>
        </div>
    );
};

export default Menu;
