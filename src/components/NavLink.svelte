<script>
  import { theme } from '../data/theme';
  export let href = '';
  export let label = '';
  export let active = false;
  export let className = '';
</script>

<a {href} class="text-zinc-300 hover:text-white transition-colors relative group {className} {active ? 'text-white' : ''}">
  {label}
  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-{theme.colors.primary.base} transition-all duration-300 group-hover:w-full {active ? 'w-full' : ''}"></span>
</a> 