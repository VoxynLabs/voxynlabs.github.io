<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import About from "../components/About.svelte";
  import Team from "../components/Team.svelte";
  import Links from "../components/Links.svelte";
  import Footer from "../components/Footer.svelte";
  
  let menuOpen = false;
  
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  
  onMount(() => {
    console.log("Home page mounted");
  });
  
  const team = [
    { name: "Turtledevv", role: "Lead Developer & Founder", avatar: "turtle", bg: "from-indigo-500 to-violet-500" },
    { name: "Grandalfwise", role: "Full-Stack Developer", avatar: "wizard", bg: "from-violet-500 to-fuchsia-500" },
    { name: "TheFunRayy", role: "Discord & Social Media Manager", avatar: "smile", bg: "from-fuchsia-500 to-pink-500" },
    { name: "Half-Life 9mm Semi-auto. Pistol", role: "Front-End Development & Discord Moderator", avatar: "code", bg: "from-pink-500 to-rose-500" },
    { name: "maybeizen", role: "Full-Stack Developer", avatar: "laptop-code", bg: "from-rose-500 to-indigo-500" }
  ];
</script>

<main class="min-h-screen bg-zinc-950 text-zinc-100 font-[Fira Code]">
  <Navbar />
  <Hero />
  <About />
  <Team {team} />
  <Links />
  <Footer />
</main>