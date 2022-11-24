import { Home, Contact, About, Services, Styleguide, Godavaribuilders,Properties } from "../pages";
import { CONSTANTS } from "./constants";

export const routes = [{
    component: <Home />,
    path: CONSTANTS.ROUTES.HOME_PAGE,
    isExact: true
}, {
    component: <Contact />,
    path: CONSTANTS.ROUTES.CONTACT_PAGE,
    isExact: true
}, {
    component: <About />,
    path: CONSTANTS.ROUTES.ABOUT_PAGE,
    isExact: true
}, {
    component: <Services />,
    path: CONSTANTS.ROUTES.SERVICES_PAGE,
    isExact: true
}, {
    component: <Styleguide />,
    path: CONSTANTS.ROUTES.STYLEGUIDE,
    isExact: true
}, {
    component: <Godavaribuilders />,
    path: CONSTANTS.ROUTES.GODAVARI_PAGE,
    isExact: true
}, {
    component: <Properties />,
    path: CONSTANTS.ROUTES.PROPERTIES_PAGE,
    isExact: true
}
];