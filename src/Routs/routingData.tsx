import Layout from "./Layout/Layout";
import Main from "../Pages/Main_page/Main";
import DevelopingPage from "../Pages/Developing_page/DevelopingPage";

export enum ROUTE{
    Main = '/',
    Technology = 'technology',
    Flight_schedule ='flight_schedule',
    Guarantees ='guarantees',
    About_company = 'about_company',
    Contacts = 'contacts'
}

type routingType= {
    path: string,
    element: React.ReactElement ,
    children?: Array < { path: string,
        element: React.ReactElement }>
}

export const routingData: Array<routingType>=[
    {
        path: '/',
        element: <Layout />,
        children: [{
            path: ROUTE.Main,
            element: <Main /> ,
        },
            {
                path: ROUTE.Technology,
                element: <DevelopingPage />,
            },
            {
                path: ROUTE.Flight_schedule,
                element: <DevelopingPage />,
            },
            {
                path: ROUTE.Guarantees,
                element: <DevelopingPage />,
            },
            {path: ROUTE.About_company,
                element: <DevelopingPage /> },
            {
                path: ROUTE.Contacts,
                element: <DevelopingPage />,
            },
        ]
    },
]