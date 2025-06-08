<script>
  function escapeHTML(code) {
    return code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  const jsSnippet1 = escapeHTML(`
import { voxyn } from '@voxyn/core';
import { safety } from '@voxyn/tools';

const app = voxyn.createApp({
  name: 'Voxyn Labs',
  version: '1.0.0',
  developers: [
    'turtledevv',
    'grandalfwise',
    'theFunRayy',
    'half-life',
    'maybeizen'
  ]
});

app.initialize();`);

  const jsSnippet2 = escapeHTML(`
function createSafeEnvironment() {
  return {
    security: 'maximum',
    accessibility: true,
    userFriendly: true,
    openSource: true,
    innovation: 100
  }
}

export default createSafeEnvironment();`);
</script>

<section class="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 opacity-20">
      <div class="w-[90rem] h-[35rem] rotate-[-10deg] bg-indigo-600/30 blur-[100px] rounded-full"></div>
    </div>
    <div class="absolute bottom-0 left-1/4 -translate-x-1/2 opacity-20">
      <div class="w-[50rem] h-[35rem] rotate-[15deg] bg-violet-600/30 blur-[100px] rounded-full"></div>
    </div>
    <div class="absolute inset-0 bg-zinc-950/30 backdrop-filter"></div>
    <div class="absolute inset-0 opacity-[0.03] mix-blend-soft-light"></div>
    
    <div class="absolute inset-0 overflow-hidden opacity-5">
      <pre class="text-sm text-indigo-400 font-['Fira_Code'] leading-relaxed whitespace-pre opacity-50 absolute top-20 left-10 transform -rotate-5">
        {@html jsSnippet1}
      </pre>
      <pre class="text-sm text-violet-400 font-['Fira_Code'] leading-relaxed whitespace-pre opacity-50 absolute bottom-20 right-10 transform rotate-5">
        {@html jsSnippet2}
      </pre>
    </div>
  </div>
  
  <div class="z-10 container mx-auto px-6 py-16 mt-16 max-w-7xl">
    <div class="max-w-3xl mx-auto text-center">
      <div class="relative inline-block">
        <span class="inline-block animate-fade-in transition-opacity duration-1000 delay-300">
          <span class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 ring-1 ring-inset ring-indigo-500/30 mb-6 font-['Fira_Code']">
            <span class="relative flex h-2 w-2 mr-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            &lt;development-collective/&gt;
          </span>
        </span>
      </div>
      
      <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold mt-6 font-['Fira_Code'] bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400 animate-fade-in transition-opacity duration-1000 leading-tight tracking-tight">
        Voxyn<span class="text-white/70">.</span>Labs
      </h1>
      
      <div class="h-16 mt-8">
        <p class="text-xl text-zinc-300 font-['Fira_Code'] animate-fade-in transition-opacity duration-1000 delay-150">
          <span class="inline-block text-indigo-400">$ </span>
          <span class="inline-block border-r-2 border-indigo-400 pr-1 animate-pulse">Building developer-friendly tools for everyone</span>
        </p>
      </div>
      
      <div class="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in transition-opacity duration-1000 delay-300">
        <a href="https://github.com/VoxynLabs" target="_blank" rel="noopener noreferrer" 
           class="rounded-lg bg-indigo-600 px-5 py-3 text-base font-['Fira_Code'] font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all transform hover:-translate-y-0.5 border border-indigo-500/30">
          <i class="fab fa-github mr-2"></i> git clone github:VoxynLabs
        </a>
        <a href="https://discord.gg/72kZvSPz39" target="_blank" rel="noopener noreferrer" 
           class="rounded-lg bg-zinc-800 px-5 py-3 text-base font-['Fira_Code'] font-medium text-white shadow-md hover:shadow-lg hover:shadow-black/20 hover:bg-zinc-700 transition-all transform hover:-translate-y-0.5 border border-zinc-700">
          <i class="fab fa-discord mr-2"></i> join --server discord
        </a>
      </div>
    </div>
  </div>
  
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
    <a href="#about" class="text-zinc-500 hover:text-white transition-colors" aria-label="Scroll down">
      <i class="fas fa-chevron-down"></i>
    </a>
  </div>
</section> 