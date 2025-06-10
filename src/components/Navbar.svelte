<script>
  import { onMount } from "svelte";
  import Button from './Button.svelte';
  import NavLink from './NavLink.svelte';
  import Badge from './Badge.svelte';
  
  let menuOpen = false;
  let scrolled = false;
  let scrollY = 0;
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      scrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 transition-all duration-300 {scrolled ? 'top-2' : 'top-6'}">
  <div class="rounded-xl overflow-hidden border border-zinc-800/40 backdrop-blur-xl {scrolled ? 'bg-zinc-900/95 shadow-lg shadow-black/30' : 'bg-zinc-900/70'} transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Voxyn Labs
          </span>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <NavLink href="#about" label="About" />
          <NavLink href="#team" label="Team" />
          <NavLink href="#links" label="Links" />
          
          <Button 
            href="https://github.com/VoxynLabs" 
            variant="ghost" 
            size="sm" 
            icon="fa-brands fa-github"
            className="ml-4"
          >
            GitHub
          </Button>
        </div>
        
        <div class="md:hidden flex items-center">
          <button on:click={toggleMenu} class="text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition-colors" aria-label="Menu">
            <i class="fas {menuOpen ? 'fa-times' : 'fa-bars'}"></i>
          </button>
        </div>
      </div>
    </div>
    
    {#if menuOpen}
      <div class="md:hidden bg-zinc-900 border-t border-zinc-800/30 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 py-3 space-y-1">
          <a href="#about" class="block px-3 py-2 rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors">
            About
          </a>
          <a href="#team" class="block px-3 py-2 rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors">
            Team
          </a>
          <a href="#links" class="block px-3 py-2 rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors">
            Links
          </a>
          <div class="pt-2 mt-2 border-t border-zinc-800/30">
            <Button 
              href="https://github.com/VoxynLabs" 
              variant="ghost" 
              size="sm" 
              icon="fa-brands fa-github"
              className="w-full justify-start"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</nav> 