<script>
  import Badge from './Badge.svelte';
  import { theme } from '../data/theme';
  
  export let title;
  export let subtitle = '';
  export let tag = '';
  export let align = 'center';
  export let className = '';
  export let gradient = theme.gradients.primary;

  $: alignClass = align === 'center' ? 'text-center mx-auto' : align === 'left' ? 'text-left' : 'text-right';
</script>

<div class={`mb-12 ${alignClass} ${className}`}>
  {#if tag}
    <Badge text={tag} size="md" className="mb-4">
    </Badge>
  {/if}
  <h2 class="text-4xl font-bold bg-gradient-to-r {gradient} bg-clip-text text-transparent pb-2">
    {title}
  </h2>
  {#if subtitle}
    <p class="text-{theme.colors.text.secondary} max-w-2xl mt-4 {align === 'center' ? 'mx-auto' : ''}">
      {subtitle}
    </p>
  {/if}
</div> 