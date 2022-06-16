
import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../views/LoginPage.vue"
import HomePage from "../views/HomePage.vue"
import CatalogPage from "../views/CatalogPage.vue"
import InventoryPage from "../views/InventoryPage.vue"
import ProductPage from "../views/ProductPage.vue"
import OrderPage from "../views/OrderPage.vue"
import SellPage from "../views/SellPage.vue"

import ModifyCatalog from "../components/ModifyCatalog.vue"
import AddCatalog from "../components/AddCatalog.vue"
import RemoveCatalog from "../components/RemoveCatalog.vue"
import CreateOrder from "../components/CreateOrder.vue"
import ConfirmOrder from "../components/ConfirmOrder.vue"

import LayoutDefault from "../layout/LayoutDefault.vue"

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        alias: '',
        component: LoginPage,
        meta: {
            requireAuth: false,
        }
    },
    {
        path: '/home',
        name: 'home',
        alias: '',
        component: HomePage,
        meta: {
            layout: LayoutDefault,
            requireAuth: false,
        }
    },
    {
        path: '/catalog',
        name: 'catalog',
        alias: '',
        component: CatalogPage,
        meta: {
            layout: LayoutDefault,
            requireAuth: false,
        },
        children: [
            {
                path: 'modify',
                component: ModifyCatalog,
            },
            {
                path: 'add',
                component: AddCatalog,
            },

            {
                path: 'remove',
                component: RemoveCatalog,
            }, {
                path: '',
                redirect: 'add',
            }

        ]
    },
    {
        path: '/inventory',
        name: 'inventory',
        alias: '',
        component: InventoryPage,
        meta: {
            layout: LayoutDefault,
            requireAuth: false,
        },
        children: [
            {
                path: 'create',
                component: CreateOrder,
            },
            {
                path: 'confirm',
                component: ConfirmOrder,
            },
            {
                path: '',
                redirect: 'create',
            }

        ]
    },
    {
        path: '/orders',
        name: 'orders',
        alias: '',
        component: OrderPage,
        meta: {
            layout: LayoutDefault,
            requireAuth: false,
        }
    },
    {
        path: '/products',
        name: 'products',
        alias: '',
        component: ProductPage,
        meta: {
            layout: LayoutDefault,
            requireAuth: false,
        }
    },
    {
        path: '/sell',
        name: 'sell',
        alias: '',
        component: SellPage,
        meta: {
            layout: LayoutDefault,
            requireAuth: false,
        }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})




export default router