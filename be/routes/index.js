import Express from 'express';
import authRoutes from './auth.route.js';
import skillRoutes from "./skills.route.js"
import profileRoutes from "./profile.route.js"

const router = Express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/skills',
        route: skillRoutes
    },
    {
        path: '/profile',
        route: profileRoutes
    }
]

defaultRoutes.forEach((routes) => {
    router.use(routes.path, routes.route)
})

export default router;