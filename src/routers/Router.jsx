import { Outlet, RouterProvider, createHashRouter } from 'react-router'
import Footer from '../components/Footer';
import HeroSection from '../pages/HeroSection';
import FeatureSection from '../pages/FeatureSection';
import ForInfant from '../subpages/ForInfant';

const Routes = () => {

    const routes = [
        {
            path: "/",
            element: <Outlet />,
            children: [
                {
                    path: "/",
                    element: <>
                        <HeroSection />
                        <FeatureSection />
                        <Footer />
                    </>
                },
                {
                    path: "/for-infant",
                    element: <ForInfant />
                }
            ]
        },
        {
            basename: "/"
        }
    ]
    const router = createHashRouter(routes);

    return (
        <RouterProvider router={router} />
    )
}

export default Routes;