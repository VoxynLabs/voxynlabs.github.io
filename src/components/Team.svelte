<script>
  export let team = [
    {
      name: "Turtledevv",
      role: "Lead Developer & Founder",
      img: "/img/turtledevv.png",
      bg: "from-indigo-500 to-violet-500",
      about: "I'm a Python and HTML developer. Learn more about me at my personal website!",
      github: "coolboy67yt",
      website: "https://turtldev.online",
      discord: "https://discord.gg/hHXAwpkDfb"
    },
    {
      name: "Grandalfwise",
      role: "Full-Stack Developer",
      img: "/img/grandalfwise.png",
      bg: "from-violet-500 to-fuchsia-500",
      github: "grandalfwise",
      about: "I'm a Python and website developer. Check out my personal website!",
      website: "https://obsidiusnet.au"
    },
    {
      name: "TheFunRayy",
      role: "Discord & Social Media Manager",
      img: "/img/thefunrayy.png",
      bg: "from-fuchsia-500 to-pink-500",
      github: "thefunrayy"
    },
    {
      name: "aero272",
      role: "Front-End Development & Discord Moderator",
      img: "/img/half-life.png",
      bg: "from-pink-500 to-rose-500",
      github: "aguywithapassion",
      about: "I'm a learning developer who mostly works with HTML and C#. I also do some of the PR for Voxyn Labs",
    },
    {
      name: "maybeizen",
      role: "Full-Stack Developer",
      img: "/img/maybeizen.png",
      bg: "from-rose-500 to-indigo-500",
      about: "Typescript and GoLang developer. I also watch anime.",
      github: "maybeizen",
      website: "https://maybeizen.space"
    },
    {
      name: "owen",
      role: "Full-Stack Developer & Owner",
      img: "/img/owen.png",
      bg: "from-indigo-500 to-violet-500",
      about: `"GO TO LLM.VIN" - owen 2025`,
      github: "owenqwenstarsky",
      website: "https://llm.vin"
    }
  ];
</script>

<section id="team" class="py-28 px-6 lg:px-8 relative overflow-hidden bg-zinc-950">
  <div class="absolute inset-0">
    <div class="absolute -top-20 right-1/4 w-[50rem] h-[30rem] opacity-5 blur-[8rem] bg-indigo-600 rounded-full"></div>
    <div class="absolute top-1/2 left-0 w-[30rem] h-[30rem] opacity-5 blur-[6rem] bg-fuchsia-600 rounded-full"></div>
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
          <div class="p-6 bg-zinc-900/50 border border-zinc-800/50 backdrop-blur rounded-2xl hover:bg-zinc-900/70 hover:shadow-lg hover:border-zinc-700 transition duration-300 relative flex flex-col h-full overflow-hidden">
            <div class="absolute inset-0 bg-zinc-900/50 opacity-5 group-hover:opacity-10 transition duration-300 rounded-2xl pointer-events-none"></div>
            
            <div class="relative flex items-center gap-4">
              <img src={member.img} alt={member.name} class="w-16 h-16 rounded-xl ring-2 ring-zinc-800 object-cover transition-transform duration-300" />
              <div>
                <h3 class="font-bold text-white group-hover:text-violet-400 transition-colors truncate max-w-[180px]" title={member.name}>
                  {member.name}
                </h3>
                <p class="text-zinc-400 text-xs font-mono mt-1 truncate max-w-[180px]" title={member.role}>{member.role}</p>
              </div>
            </div>

            {#if member.about}
              <div class="mt-4 p-3 bg-zinc-800/20 rounded-lg border border-zinc-800/30 text-zinc-300 text-sm font-mono leading-relaxed">
                {member.about}
              </div>
            {/if}

            <div class="mt-auto">
              <div class="flex items-center justify-center gap-3 mt-6">
                {#if member.github}
                  <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center text-zinc-400 hover:text-indigo-400 h-8 w-8 rounded-full bg-zinc-800/30 hover:bg-zinc-800/60 transition-all">
                    <i class="fa-brands fa-github"></i>
                  </a>
                {/if}
                {#if member.website}
                  <a href={member.website} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center text-zinc-400 hover:text-fuchsia-400 h-8 w-8 rounded-full bg-zinc-800/30 hover:bg-zinc-800/60 transition-all">
                    <i class="fa-solid fa-globe"></i>
                  </a>
                {/if}
                {#if member.discord}
                  <a href={`${member.discord}`} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center text-zinc-400 hover:text-indigo-400 h-8 w-8 rounded-full bg-zinc-800/30 hover:bg-zinc-800/60 transition-all">
                    <i class="fa-brands fa-discord"></i>
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
