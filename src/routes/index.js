import HeaderOnly from '~/components/layouts/HeaderOnly';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Feedback from '~/pages/Feedback';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '/feedback',
        component: Feedback,
    },
    {
        path: '/:nickname',
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
