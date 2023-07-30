<script lang="ts">
    import { onMount } from 'svelte';
    import { get } from "svelte/store";

    import Lane from "../components/Lane.svelte";
    import Bug from "../components/Bug.svelte";
    import { generateBugs, getRandomInt } from "../utils";
    import type { Status } from "../types";
    // svgs
    import SVGplay from "../svgs/play.svelte";
    import SVGstop from "../svgs/stop.svelte";
    import SVGsettings from "../svgs/settings.svelte";
    // state
    import { bugsCount, lanesCount, gameLength, killCount } from "../lib/stores.js";

    let config = {
        lifespan: 5000, // average
        totalLanes: <number>get(lanesCount),
        totalBugs: <number>get(bugsCount),
        gameLength: <number>get(gameLength),
    };
    // State stuff
    let gameStatus: Status = "new";
    let startTime = 0;
    let lastTime = 0;
    let bugs = [];
    let kills = 0;

    const tick = (timestamp: number) => {
        if (startTime === 0) {
            startTime = timestamp;
        }
        lastTime = timestamp - startTime;
        bugs.forEach((bug) => {
            // tapable zone is 40% of screen; 70% of lifespan
            if (
                bug.isTapable === false &&
                lastTime > bug.delay + (bug.lifespan * 3) / 7
            ) {
                bug.isTapable = true;
            }
        });
        bugs = bugs;

        // if (Math.floor(timestamp / 1000) % 5 === 0) {
        //     add();
        // }

        if (lastTime > config.gameLength) {
            stop();
        }

        if (gameStatus === "active") {
            requestAnimationFrame(tick);
        }
    };

    function stop() {
        gameStatus = "new";
        startTime = 0;
        bugs = [];
        killCount.reset();
    }

    function start() {
        appHeight();
        if (gameStatus === "active") {
            return;
        }
        bugs = generateBugs();
        console.info(bugs);
        gameStatus = "active";
        requestAnimationFrame(tick);
    }

    // css
    const appHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    onMount(() => {		
		window.addEventListener('resize', appHeight);
	});
</script>

<div id="container" class="flex w-screen h-screen">
    <div
        id="controls"
        class="absolute flex flex-col justify-center items-center w-16"
    >
        {#if gameStatus === "new"}
            <button class="cursor-pointer" on:click={start}><SVGplay /></button>
            <a class="cursor-pointer" href="/settings"><SVGsettings /></a>
        {:else}
            <button on:click={stop}><SVGstop /></button>
            <h4>{$killCount}</h4>
        {/if}
    </div>

    {#each { length: config.totalLanes } as _, i}
        <Lane />
    {/each}

    {#if gameStatus === "active"}
        {#each bugs as bug, i}
            <Bug
                value={bug.value}
                isTapable={bug.isTapable}
                isMovesUp={bug.isMovesUp}
                --color={bug.color}
                --scale={(bug.lifespan / 25000).toFixed(2)}
                --offset="{bug.laneIndex * (100 / config.totalLanes) +
                    100 / config.totalLanes / 2}%"
                --delay="{bug.delay}ms"
                --speed="{bug.lifespan}ms"
            />
        {/each}
    {/if}
</div>

<style global>
    :root {
        --app-height: 100%;
        --position-multipler: -1;
        --wobble-width: 10px;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        height: var(--app-height);
    }
    .bug {
        border-radius: 100%;
        /* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2), inset 0px 5px 15px 2px rgba(255, 255, 255, 1); */
        backdrop-filter: blur(1px);
        justify-content: center;
        align-items: center;
    }
</style>
