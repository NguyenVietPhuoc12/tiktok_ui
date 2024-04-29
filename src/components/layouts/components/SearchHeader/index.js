import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './SearchHeader.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const SearchHeader = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchInputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((users) => {
                setSearchResult(users.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handleChangeSearchValue = (e) => {
        const inputValue = e.target.value;
        if (!/^\s/.test(inputValue)) {
            setSearchValue(inputValue);
        }
    };

    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);
        searchInputRef.current.focus();
    };

    const handleHideSearchResult = () => {
        setShowSearchResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                visible={showSearchResult && searchResult.length > 0}
                interactive
                onClickOutside={handleHideSearchResult}
                render={(attrs) => {
                    return (
                        <div className={cx('header__content-search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search__result-title')}>Accounts</h4>
                                {searchResult.map((item) => {
                                    return <AccountItem key={item.id} data={item} />;
                                })}
                            </PopperWrapper>
                        </div>
                    );
                }}
            >
                <div className={cx('header__content-search')}>
                    <input
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        ref={searchInputRef}
                        spellCheck={false}
                        onChange={handleChangeSearchValue}
                        onFocus={() => setShowSearchResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('header__content-clear-btn')} onClick={handleClearSearchValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('header__content-loading')} icon={faSpinner} />}
                    <button className={cx('header__content-search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default SearchHeader;
