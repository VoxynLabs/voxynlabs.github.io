<script>
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import About from "../components/About.svelte";
  import Team from "../components/Team.svelte";
  import Links from "../components/Links.svelte";
  import Footer from "../components/Footer.svelte";
  import { theme } from "../data/theme";
</script>

<main class="min-h-screen bg-zinc-950 text-zinc-100 font-['Figtree'] relative overflow-hidden">
  <div class="fixed inset-0 -z-10">
    <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
    <div class="absolute top-0 left-0 w-full h-full opacity-10">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[90rem] h-[50rem] bg-indigo-600/30 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-0 left-1/4 -translate-x-1/2 w-[70rem] h-[50rem] bg-violet-600/30 blur-[120px] rounded-full"></div>
    </div>
  </div>
  
  <Navbar />
  <Hero />
  <About />
  <Team />
  <Links />
  <Footer />
</main>