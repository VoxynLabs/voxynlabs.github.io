<script>
  export let member;
</script>

<div class="group h-full">
  <div class="p-6 bg-zinc-900/30 border border-zinc-800/30 rounded-xl backdrop-blur-md transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-black/10 hover:border-zinc-700/50 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br {member.bg || 'from-indigo-500/5 to-fuchsia-500/5'} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>
    
    <div class="flex items-center gap-4 mb-5 relative">
      <div class="w-12 h-12 rounded-lg overflow-hidden shadow-md">
        <img src={member.img} alt={member.name} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div>
        <h3 class="text-white font-medium group-hover:text-indigo-300 transition-colors">
          {member.name}
        </h3>
        <p class="text-zinc-400 text-sm">{member.role}</p>
      </div>
    </div>
    
    {#if member.about}
      <p class="text-zinc-300 text-sm mb-6 bg-zinc-800/20 p-3 rounded-lg backdrop-blur-sm border border-zinc-800/20 group-hover:border-zinc-700/30 transition-all">{member.about}</p>
    {/if}
    
    <div class="mt-auto z-20">
      <div class="flex gap-4">
        {#if member.github}
          <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer" 
             class="text-zinc-400 hover:text-indigo-400 transition-colors" aria-label={`${member.name}'s GitHub profile`}>
            <i class="fa-brands fa-github text-lg"></i>
          </a>
        {/if}
        {#if member.website}
          <a href={member.website} target="_blank" rel="noopener noreferrer" 
             class="text-zinc-400 hover:text-fuchsia-400 transition-colors" aria-label={`${member.name}'s website`}>
            <i class="fa-solid fa-globe text-lg"></i>
          </a>
        {/if}
        {#if member.discord}
          <a href={member.discord} target="_blank" rel="noopener noreferrer" 
             class="text-zinc-400 hover:text-indigo-400 transition-colors" aria-label={`${member.name}'s Discord`}>
            <i class="fa-brands fa-discord text-lg"></i>
          </a>
        {/if}
      </div>
    </div>
  </div>
</div> 