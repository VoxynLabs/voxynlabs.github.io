<script>
  import Container from './Container.svelte';
  
  export let id = '';
  export let bg = 'bg-transparent';
  export let padding = 'py-28';
  export let container = true;
  export let maxWidth = '6xl';
  export let gradient = false;
  export let gradientPosition = 'default';
  export let className = '';
  
  const positions = {
    default: `
      <div class="absolute top-0 right-0 w-1/2 h-1/2 opacity-10 blur-[120px] bg-indigo-600 rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 blur-[120px] bg-fuchsia-600 rounded-full"></div>
    `,
    topLeft: `
      <div class="absolute top-0 left-0 w-1/2 h-1/2 opacity-10 blur-[120px] bg-indigo-600 rounded-full"></div>
      <div class="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 blur-[120px] bg-fuchsia-600 rounded-full"></div>
    `,
    center: `
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-10 blur-[120px] bg-indigo-600 rounded-full"></div>
    `,
    top: `
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 opacity-10 blur-[120px] bg-indigo-600 rounded-full"></div>
    `,
    bottom: `
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 opacity-10 blur-[120px] bg-indigo-600 rounded-full"></div>
    `
  };
</script>

<section {id} class="{padding} relative {bg} {className}">
  {#if gradient}
    <div class="absolute inset-0 pointer-events-none">
      {@html positions[gradientPosition]}
    </div>
  {/if}
  
  {#if container}
    <Container maxWidth={maxWidth}>
      <slot></slot>
    </Container>
  {:else}
    <slot></slot>
  {/if}
</section> 