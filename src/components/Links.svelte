<script>
  import Section from './Section.svelte';
  import SectionTitle from './SectionTitle.svelte';
  import Button from './Button.svelte';
  
  const links = [
    { url: "https://voxynlabs.github.io/", icon: "globe", label: "Website", color: "from-blue-500 to-indigo-500" },
    { url: "https://github.com/VoxynLabs", icon: "github", label: "GitHub", color: "from-indigo-500 to-violet-500" },
    { url: "https://discord.gg/72kZvSPz39", icon: "discord", label: "Discord", color: "from-violet-500 to-purple-500" }
  ];
</script>

<Section id="links" gradientPosition="bottom">
    <SectionTitle title="Our Links" tag="Connect with us" subtitle="Find us on various platforms and join our community" />

  <div class="max-w-3xl mx-auto">
    <div class="space-y-6">
      {#each links as link, i}
          <div class="group relative">
            <div class="absolute -inset-0.5 rounded-xl bg-gradient-to-r {link.color} opacity-25 blur group-hover:opacity-100 transition-all duration-300"></div>
            <a href={link.url} target="_blank" rel="noopener noreferrer" 
               class="relative flex items-center rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-2xl shadow-black/20 group-hover:border-transparent transition-all duration-300">
              <div class="mr-6 h-14 w-14 rounded-lg bg-gradient-to-r {link.color} flex items-center justify-center shadow-inner transform group-hover:scale-110 transition-all duration-300">
                <i class="fab fa-{link.icon === 'globe' ? 'chrome' : link.icon} text-white text-2xl"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-white">{link.label}</h3>
                </div>
                <p class="text-zinc-400 text-sm truncate">{link.url}</p>
              </div>
            </a>
          </div>
        
      {/each}
      
        <div class="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm mt-10">
          <div class="absolute -top-3 left-8 bg-zinc-900 px-3 py-1 text-sm text-zinc-400 border border-zinc-800 rounded-full">
            <i class="fas fa-star mr-1 text-indigo-400"></i> Join our community
          </div>
          <p class="text-zinc-300 mb-4">We're always looking for passionate developers and contributors. Join our Discord server to get involved with our latest projects!</p>
          <Button 
            href="https://discord.gg/72kZvSPz39" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="ghost" 
            icon="fab fa-discord"
            size="sm"
          >
            Join Discord
          </Button>
        </div>
    </div>
  </div>
</Section> 