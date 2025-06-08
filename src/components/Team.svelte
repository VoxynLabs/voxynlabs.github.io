<script>
  export let team = [
    {
      name: "Turtledevv",
      role: "Lead Developer & Founder",
      emoji: "🐢",
      bg: "from-indigo-500 to-violet-500"
    },
    {
      name: "Grandalfwise",
      role: "Full-Stack Developer",
      emoji: "🧙",
      bg: "from-violet-500 to-fuchsia-500"
    },
    {
      name: "TheFunRayy",
      role: "Discord & Social Media Manager",
      emoji: "😎",
      bg: "from-fuchsia-500 to-pink-500"
    },
    {
      name: "Half-Life 9mm Semi-auto. Pistol",
      role: "Front-End Development & Discord Moderator",
      emoji: "🔫",
      bg: "from-pink-500 to-rose-500"
    },
    {
      name: "maybeizen",
      role: "Full-Stack Developer",
      emoji: "💻",
      bg: "from-rose-500 to-indigo-500"
    }
  ];
</script>

<section id="team" class="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-zinc-950">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-[10%] right-[30%] w-[50rem] h-[30rem] opacity-[0.03] blur-[8rem] bg-indigo-600 rounded-full"></div>
    <div class="absolute top-[40%] -left-[5%] w-[30rem] h-[30rem] opacity-[0.03] blur-[6rem] bg-fuchsia-600 rounded-full"></div>
  </div>
  
  <div class="relative z-10 max-w-6xl mx-auto">
    <div class="text-center mb-20">
      <span class="inline-block px-3 py-1 text-xs font-mono tracking-wider rounded-full bg-indigo-500/10 text-indigo-400 ring-1 ring-inset ring-indigo-500/30 mb-4">
        <span class="mr-1">&lt;</span>VoxynLabs<span class="ml-1">/&gt;</span>
      </span>
      <h2 class="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-mono pb-2">
        Our Team
      </h2>
      <p class="text-zinc-400 max-w-2xl mx-auto mt-4">
        Meet the talented developers and creators behind VoxynLabs. Together, we're building something amazing.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each team as member}
        <div class="group">
          <div class="p-6 bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-zinc-700/50 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-black/20 relative overflow-hidden h-full">

            <div class="absolute inset-0 bg-gradient-to-br {member.bg} opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300"></div>
            
            <div class="relative flex items-start gap-4">              
              <div class="flex-1 pt-1">
                <h3 class="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-violet-400 group-hover:to-fuchsia-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p class="text-zinc-400 text-sm mt-1 font-mono">{member.role}</p>
              </div>
            </div>

            <div class="mt-6 text-xs text-zinc-600 font-mono pt-4 border-t border-zinc-800/50">
              <span class="text-zinc-500">const</span> <span class="text-indigo-400">developer</span> <span class="text-zinc-500">=</span> <span class="text-fuchsia-400">new</span> <span class="text-violet-400">Developer</span><span class="text-zinc-500">();</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
