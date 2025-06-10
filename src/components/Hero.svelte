<script>
  import Section from './Section.svelte';
  import Button from './Button.svelte';
  import Badge from './Badge.svelte';
</script>

<Section padding="min-h-screen" container={false} gradientPosition="center">
  <div class="z-10 container mx-auto px-6 py-16 mt-12 max-w-7xl flex items-center justify-center min-h-[calc(100vh-8rem)]">
    <div class="max-w-3xl mx-auto text-center">
        <Badge 
          text="Development Collective" 
          pulse={true} 
        />

        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-400 to-indigo-600 leading-tight">
          Voxyn Labs
        </h1>
      
        <div class="h-16 mt-8">
          <p class="text-xl text-zinc-300">
            Building developer-friendly tools for everyone
          </p>

        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <Button 
            href="https://github.com/VoxynLabs" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="primary" 
            icon="fab fa-github"
          >
            GitHub
          </Button>
          <Button 
            href="https://discord.gg/72kZvSPz39" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="secondary" 
            icon="fab fa-discord"
          >
            Discord
          </Button>
        </div>
    </div>
  </div>
  
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
    <a href="#about" class="text-zinc-500 hover:text-white transition-colors" aria-label="Scroll down">
      <i class="fas fa-chevron-down"></i>
    </a>
  </div>
</Section> 