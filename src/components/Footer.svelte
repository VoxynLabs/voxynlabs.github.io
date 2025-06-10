<script>
  import Container from './Container.svelte';
  import { theme } from '../data/theme';
  
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Links",
      items: [
        { label: "About", href: "#about" },
        { label: "Team", href: "#team" },
        { label: "Links", href: "#links" }
      ]
    },
    {
      title: "Projects",
      items: [
        { label: "GitHub", href: "https://github.com/VoxynLabs", external: true },
        { label: "Discord Bots", href: "https://discord.gg/72kZvSPz39", external: true }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Documentation", href: "https://github.com/VoxynLabs", external: true },
        { label: "Tutorials", href: "https://github.com/VoxynLabs", external: true }
      ]
    },
    {
      title: "Contact",
      items: [
        { label: "Email", href: "mailto:contact@voxynlabs.com", external: true },
        { label: "Discord", href: "https://discord.gg/72kZvSPz39", external: true }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/VoxynLabs", label: "GitHub" },
    { icon: "fab fa-discord", href: "https://discord.gg/72kZvSPz39", label: "Discord" },
    { icon: "fas fa-envelope", href: "mailto:contact@voxynlabs.com", label: "Email" }
  ];
</script>

<footer class="bg-zinc-950 border-t border-zinc-900 py-12">
  <Container>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div class="lg:col-span-2 space-y-6">
        <span class="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
          Voxyn Labs
        </span>
        <p class="text-zinc-400 max-w-xs">
          A development group creating innovative and user-friendly tools for everyone.
        </p>
        <div class="flex space-x-5">
          {#each socialLinks as link}
            <a href={link.href} target={link.href.startsWith('mailto:') ? null : '_blank'} rel="noopener noreferrer" 
               class="text-zinc-500 hover:text-indigo-400 transition-colors" aria-label={link.label}>
              <i class="{link.icon} text-xl"></i>
            </a>
          {/each}
        </div>
      </div>
      
      <div class="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each footerLinks as section}
          <div>
            <h3 class="text-sm font-semibold text-indigo-400 tracking-wider uppercase">{section.title}</h3>
            <ul class="mt-4 space-y-3">
              {#each section.items as item}
                <li>
                  <a href={item.href} 
                     target={item.external ? '_blank' : null} 
                     rel={item.external ? 'noopener noreferrer' : null} 
                     class="text-sm text-zinc-500 hover:text-indigo-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="mt-12 border-t border-zinc-900 pt-8">
      <p class="text-xs text-zinc-500 text-center">
        &copy; {currentYear} Voxyn Labs. All rights reserved.
      </p>
    </div>
  </Container>
</footer> 