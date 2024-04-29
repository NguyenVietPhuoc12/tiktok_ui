import routesConfig from '~/config/routes';
import HeaderOnly from '~/components/layouts/HeaderOnly';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Feedback from '~/pages/Feedback';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
    {
        path: routesConfig.feedback,
        component: Feedback,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
