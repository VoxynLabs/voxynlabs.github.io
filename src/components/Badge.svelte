<script>
  export let text = '';
  export let icon = '';
  export let variant = 'primary';
  export let size = 'md';
  export let pulse = false;
  export let className = '';

  const variants = {
    primary: 'bg-indigo-500/10 text-indigo-400 ring-1 ring-inset ring-indigo-500/30',
    secondary: 'bg-fuchsia-500/10 text-fuchsia-400 ring-1 ring-inset ring-fuchsia-500/30',
    success: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/30',
    warning: 'bg-amber-500/10 text-amber-400 ring-1 ring-inset ring-amber-500/30',
    danger: 'bg-rose-500/10 text-rose-400 ring-1 ring-inset ring-rose-500/30',
    info: 'bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/30',
    dark: 'bg-zinc-800/50 text-zinc-400 ring-1 ring-inset ring-zinc-700/30'
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5 rounded-full',
    md: 'text-xs px-3 py-1 rounded-full',
    lg: 'text-sm px-4 py-1.5 rounded-full'
  };
</script>

<span class="inline-flex items-center tracking-wider font-medium {variants[variant]} {sizes[size]} {className}">
  {#if pulse}
    <span class="relative flex h-2 w-2 mr-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
    </span>
  {/if}
  
  {#if icon}
    <i class="{icon} {text ? 'mr-1.5' : ''}"></i>
  {/if}
  
  {#if text}
    <span>
      {#if $$slots.prefix}
        <span class="mr-1"><slot name="prefix"></slot></span>
      {/if}
      
      {text}
      
      {#if $$slots.suffix}
        <span class="ml-1"><slot name="suffix"></slot></span>
      {/if}
    </span>
  {:else}
    <slot></slot>
  {/if}
</span> 