<script>
  import Section from './Section.svelte';
  import SectionTitle from './SectionTitle.svelte';

  const features = [
    {
      icon: 'fa-shield-alt',
      title: 'User Safety',
      description: 'We prioritize keeping users safe in all our applications'
    },
    {
      icon: 'fa-universal-access',
      title: 'Accessibility',
      description: 'Creating tools that everyone can use regardless of ability'
    },
    {
      icon: 'fa-code-branch',
      title: 'Open Development',
      description: 'Collaborative approach where every team member has equal input'
    }
  ];
</script>

<Section id="about" gradientPosition="topLeft">
    <SectionTitle title="About Us" tag="Who are we?" />
  

    <div class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm shadow-xl shadow-black/10 transform hover:scale-[1.01] transition-all duration-300 max-w-3xl mx-auto">
      <p class="text-zinc-300 leading-relaxed mb-6 text-lg">
        Voxyn Labs is a development group that makes varying projects, usually in Python
        or JS. Founded by turtledevv, we focus on user safety and creating innovative and
        accessible tools for everyone.
      </p>
      <p class="text-zinc-300 leading-relaxed text-lg">
        We make sure that everyone on our development team has fun, and everyone has an equal say in everything.
        No bosses, just a whole bunch of computer nerds.
      </p>
    
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each features as feature, i}
            <div class="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
              <div class="flex items-center mb-3">
                <i class="fas {feature.icon} text-indigo-400 mr-3"></i>
                <span class="text-white font-medium">{feature.title}</span>
              </div>
              <p class="text-zinc-400 text-sm">{feature.description}</p>
            </div>
          
        {/each}
      </div>
    </div>
  
</Section> 