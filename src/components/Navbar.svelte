<script>
  import { onMount } from "svelte";
  
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
          <span class="text-2xl font-bold font-['Fira_Code'] bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">&lt;Voxyn <span class="text-white/80">/</span>&gt;</span>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <a href="#about" class="font-['Fira_Code'] text-zinc-300 hover:text-white transition-colors relative group">
            <span class="font-[fira_code]">&lt;</span>About<span class="font-[fira_code]">/&gt;</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#team" class="font-['Fira_Code'] text-zinc-300 hover:text-white transition-colors relative group">
            <span class="font-[fira_code]">&lt;</span>Team<span class="font-[fira_code]">/&gt;</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#links" class="font-['Fira_Code'] text-zinc-300 hover:text-white transition-colors relative group">
            <span class="font-[fira_code]">&lt;</span>Links<span class="font-[fira_code]">/&gt;</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
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
          <a href="#about" class="block px-3 py-2 rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors font-['Fira_Code']">
            <span class="font-[fira_code]">&lt;</span>About<span class="font-[fira_code]">/&gt;</span>
          </a>
          <a href="#team" class="block px-3 py-2 rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors font-['Fira_Code']">
            <span class="font-[fira_code]">&lt;</span>Team<span class="font-[fira_code]">/&gt;</span>
          </a>
          <a href="#links" class="block px-3 py-2 rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors font-['Fira_Code']">
            <span class="font-[fira_code]">&lt;</span>Links<span class="font-[fira_code]">/&gt;</span>
          </a>
        </div>
      </div>
    {/if}
  </div>

</nav> 