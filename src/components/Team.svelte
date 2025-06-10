<script>
  import { teamData } from '../data/teamData';
  import TeamCard from './TeamCard.svelte';
  import SectionTitle from './SectionTitle.svelte';
  import Button from './Button.svelte';
  import Section from './Section.svelte';
  
  let team = teamData;
</script>

<Section id="team">
    <SectionTitle 
      title="Our Team" 
      tag="Voxyn Labs" 
      subtitle="Meet the talented developers and creators behind VoxynLabs. Together, we're building something amazing."
    />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each team as member, i}
      
        <TeamCard {member} />

    {/each}
  </div>
  
    <div class="mt-16 text-center">
      <Button 
        href="https://discord.gg/72kZvSPz39" 
        target="_blank" 
        rel="noopener noreferrer" 
        variant="ghost" 
        icon="fa-brands fa-discord"
      >
        Join our community
      </Button>
    </div>
</Section>
