<script lang="ts">
    import SVGclose from '../../svgs/close.svelte';
    import { lanesCount, bugsCount, lifespanCount } from '$lib/stores';
</script>

<div class="max-w-md my-8 m-auto relative font-mono">
    <h1 class="text-3xl mb-4">Settings</h1>
    <p><a class="absolute top-0 right-0 text-5xl font-bold w-8" href="../"><SVGclose/></a></p>
    <div class="flex mb-4">
        <p>Lanes: {$lanesCount}</p>
        <div class="ml-auto">
            <button 
                on:click={() => lanesCount.increment()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                +
            </button>
            <button 
                on:click={() => lanesCount.decrement()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                -
            </button>
            <button 
                on:click={() => lanesCount.reset()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Reset
            </button>
        </div>
    </div>
    <div class="flex mb-4">
        <p>Bugs: {$bugsCount}</p>
        <div class="ml-auto">
            <button 
                on:click={() => bugsCount.increment()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                +
            </button>
            <button 
                on:click={() => bugsCount.decrement()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                -
            </button>
            <button 
                on:click={() => bugsCount.reset()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Reset
            </button>
        </div>
    </div>
    <div class="flex mb-4">
        <p>Bug lifespan, <br>in milliseconds: {$lifespanCount}</p>
        <div class="ml-auto">
            <button 
                on:click={() => lifespanCount.increment()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                +
            </button>
            <button 
                on:click={() => lifespanCount.decrement()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                -
            </button>
            <button 
                on:click={() => lifespanCount.reset()}
                class="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Reset
            </button>
        </div>
    </div>
</div>
