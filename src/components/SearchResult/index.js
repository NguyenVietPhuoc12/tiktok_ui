import { memo, useCallback } from 'react';
import AccountItem from '../AccountItem';

const SearchResult = ({ result }) => {
    const accountItems = result.map((item) => {
        return <AccountItem key={item.id} data={item} />;
    });

    return accountItems;
};

export default memo(SearchResult);
