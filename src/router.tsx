import { createBrowserRouter } from 'react-router';

import { Home } from './pages/home/index';
import { Detail } from './pages/details/index';
import { NotFound } from './pages/notfound/index';
import { Layout } from './components/layout';

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/detail/:cripto',
                element: <Detail/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
])

export {router}
