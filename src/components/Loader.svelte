<script>
  export let size = 'md';
  export let color = 'indigo';
  export let className = '';
  
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };
  
  const colors = {
    indigo: 'border-indigo-500',
    violet: 'border-violet-500',
    fuchsia: 'border-fuchsia-500',
    white: 'border-white'
  };
</script>

<div class="flex justify-center items-center {className}">
  <div class="{sizes[size]} rounded-full border-2 border-t-transparent {colors[color]} animate-spin"></div>
</div> 