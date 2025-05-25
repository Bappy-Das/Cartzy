import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/layouts.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/pages/HomePage.vue"),
        meta: { pageTitle: "home" },
      },
      {
        path: "/product-details/:id",
        name: "ProductDetails",
        component: () => import("@/pages/ProductDetails.vue"),
        meta: { pageTitle: "home" },
      },

      // Add a catch-all route for 404 errors
      {
        path: "/:pathMatch(.*)*",
        component: () => import("@/components/Shared/NotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // This function will be called before each route navigation
  next(); // Ensure you always call next() to continue with the navigation
});

export default router;
