<script>
  import { onMount } from "svelte";
  import Home from "./pages/Home.svelte";

  import Router from "svelte-spa-router";

  const routes = {
    "/": Home,
  };

  onMount(() => {
    console.log("Svelte app mounted");
  });
</script>

<Router {routes} />