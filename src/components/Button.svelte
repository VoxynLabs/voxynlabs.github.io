<script>
  export let href = '';
  export let target = '';
  export let rel = '';
  export let variant = 'primary';
  export let size = 'md';
  export let icon = '';
  export let className = '';

  const variants = {
    primary: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:bg-indigo-500 border border-indigo-500/30',
    secondary: 'bg-zinc-800 text-white shadow-md hover:shadow-lg hover:shadow-black/20 hover:bg-zinc-700 border border-zinc-700',
    ghost: 'bg-transparent text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-3.5 text-lg'
  };

  $: buttonClasses = `
    rounded-lg font-medium transition-all transform hover:-translate-y-0.5 
    focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600
    inline-flex items-center justify-center
    ${variants[variant]} ${sizes[size]} ${className}
  `;
</script>

{#if href}
  <a {href} {target} {rel} class={buttonClasses}>
    {#if icon}
      <i class="{icon} mr-2"></i>
    {/if}
    <slot></slot>
  </a>
{:else}
  <button class={buttonClasses}>
    {#if icon}
      <i class="{icon} mr-2"></i>
    {/if}
    <slot></slot>
  </button>
{/if} 