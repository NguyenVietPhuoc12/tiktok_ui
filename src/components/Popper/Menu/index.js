import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuHeader from '~/components/Popper/Menu/MenuHeader';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

const defaultFnc = () => {};

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFnc }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleOnBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleHideItem = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                offset={[10, 10]}
                placement="bottom-end"
                interactive
                delay={[0, 500]}
                hideOnClick={hideOnClick}
                render={(attrs) => {
                    return (
                        <div className={cx('menu__content')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('menu__popper')}>
                                {history.length > 1 && <MenuHeader title="Languages" onBack={handleOnBackMenu} />}
                                {renderItems()}
                            </PopperWrapper>
                        </div>
                    );
                }}
                onHide={handleHideItem}
            >
                {children}
            </Tippy>
        </div>
    );
};

export default Menu;
