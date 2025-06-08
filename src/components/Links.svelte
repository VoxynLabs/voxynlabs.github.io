<script>
  const links = [
    { url: "https://voxynlabs.github.io/", icon: "globe", label: "Website", color: "from-blue-500 to-indigo-500" },
    { url: "https://github.com/VoxynLabs", icon: "github", label: "GitHub", color: "from-indigo-500 to-violet-500" },
    { url: "https://discord.gg/72kZvSPz39", icon: "discord", label: "Discord", color: "from-violet-500 to-purple-500" }
  ];
</script>

<section id="links" class="py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950/50 relative overflow-hidden">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute bottom-0 right-0 opacity-10">
      <div class="w-[40rem] h-[40rem] rotate-[-25deg] bg-indigo-600/20 blur-[100px] rounded-full"></div>
    </div>
  </div>

  <div class="mx-auto max-w-7xl">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center mb-12">
        <div class="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mr-4 border border-indigo-500/20">
          <i class="fas fa-link text-xl text-indigo-400"></i>
        </div>
        <h2 class="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent font-['Fira_Code']">
          const links = [];
        </h2>
      </div>
    
      <div class="space-y-6">
        {#each links as link}
          <div class="group relative">
            <div class="absolute -inset-0.5 rounded-xl bg-gradient-to-r {link.color} opacity-25 blur group-hover:opacity-100 transition-all duration-300"></div>
            <a href={link.url} target="_blank" rel="noopener noreferrer" 
               class="relative flex items-center rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-2xl shadow-black/20 group-hover:border-transparent transition-all duration-300">
              <div class="mr-6 h-14 w-14 rounded-lg bg-gradient-to-r {link.color} flex items-center justify-center shadow-inner transform group-hover:scale-110 transition-all duration-300">
                <i class="fab fa-{link.icon === 'globe' ? 'chrome' : link.icon} text-white text-2xl"></i>
              </div>
              <div class="flex-1 font-['Fira_Code']">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-white">{link.label}</h3>
                  <i class="fas fa-arrow-right text-zinc-500 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"></i>
                </div>
                <p class="text-zinc-400 text-sm truncate">{link.url}</p>
              </div>
            </a>
          </div>
        {/each}
      
        <div class="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm mt-10">
          <div class="absolute -top-3 left-8 bg-zinc-900 px-3 py-1 text-sm text-zinc-400 border border-zinc-800 rounded-full font-['Fira_Code']">
            <i class="fas fa-star mr-1 text-indigo-400"></i> join(community)
          </div>
          <p class="text-zinc-300 mb-4 font-['Fira_Code']">We're always looking for passionate developers and contributors. Join our Discord server to get involved with our latest projects!</p>
          <a href="https://discord.gg/72kZvSPz39" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors font-['Fira_Code']">
            <span>Join Discord</span>
            <i class="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section> 