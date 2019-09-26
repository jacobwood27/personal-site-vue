import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      isMainNav: true,
      component: () => import("./views/Home.vue")
    },
    {
      path: "/climbing",
      name: "Climbing",
      isMainNav: true,
      component: () => import("./views/Climbing.vue")
    },
    {
      // This is a dummy route that just is a grouping for other routes
      path: "#",
      name: "\xa0\xa0\xa0\xa0Portfolio\xa0\xa0\xa0\xa0",
      isMainNav: true,
      nestedLinks: [
        { path: "/billiard-ball-robot", name: "Robotics" },
        { path: "/webgl-graphics/galaxy", name: "Graphics" },
        { path: "/computational/finite-element", name: "Numerical Analysis" },
        { path: "/crossword", name: "Crossword" }
      ]
    },
    {
      path: "/billiard-ball-robot",
      name: "Ball Robot",
      component: () => import("./views/BallRobot.vue")
    },
    {
      path: "/computational",
      name: "Computation",
      component: () => import("./views/compute/Computational.vue"),
      children: [
        {
          path: "finite-element",
          name: "Neo-Hookean Membranes",
          component: () => import("./views/compute/FiniteElement.vue")
        },
        {
          path: "finite-volume",
          name: "Supersonic Jet Inlet",
          component: () => import("./views/compute/FiniteVolume.vue")
        }
      ]
    },
    {
      path: "/webgl-graphics",
      name: "WebGL Examples",
      component: () => import("./views/webgl/WebGLExamples.vue"),
      children: [
        {
          path: "fractals",
          name: "Fractals on Canvas",
          component: () => import("./views/webgl/Fractals.vue")
        },
        {
          path: "cubert",
          name: "Cubes in Space",
          component: () => import("./views/webgl/Cubert.vue")
        },
        {
          path: "ffvii-textures",
          name: "FFVII Textures",
          component: () => import("./views/webgl/FfViiTextures.vue")
        },
        {
          path: "galaxy",
          name: "Creating the Galaxy",
          component: () => import("./views/webgl/Galaxy.vue")
        },
        {
          path: "island-game",
          name: "Island Game",
          component: () => import("./views/webgl/IslandGame.vue")
        }
      ]
    },
    {
      path: "/crossword",
      name: "crossword",
      component: () => import("./views/Crossword.vue")
    },
    { path: "*", component: () => import("./components/NotFound.vue") }
  ]
});
