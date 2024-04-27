import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b8ec663771de86e13f821470f425b742.jpeg?lk3s=a5d48078&x-expires=1714017600&x-signature=ZdAqwETFyp4S5oE6ysWLSeSyAK4%3D"
                alt="avatar"
                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b8ec663771de86e13f821470f425b742.jpeg?lk3s=a5d48078&x-expires=1714017600&x-signature=ZdAqwETFyp4S5oE6ysWLSeSyAK4%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen viet Phuoc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvietphuo24</span>
            </div>
        </div>
    );
}

export default AccountItem;
