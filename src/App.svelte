<script>
  import Home from "./pages/Home.svelte";

  import Router from "svelte-spa-router";

  const routes = {
    "/": Home,
  };
</script>

<Router {routes} />