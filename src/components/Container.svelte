<script>
  export let maxWidth = '6xl';
  export let padding = 'px-6 lg:px-8';
  export let className = '';

  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    none: ''
  };
</script>

<div class="{maxWidths[maxWidth]} mx-auto {padding} {className}">
  <slot></slot>
</div> 