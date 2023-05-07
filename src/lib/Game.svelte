<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    // export let appName: string;
    import Lane from "../components/Lane.svelte";
    import Bug from "../components/Bug.svelte";
    // import Stopwatch from "../components/Stopwatch.svelte";
    import { generateBugs, getRandomInt } from "../utils";
    import type { Component, IPlayChit, ITimeInfo, Status } from "../types";
    // svgs
    import SVGplay from "../svgs/play.svelte";
    import SVGstop from "../svgs/stop.svelte";
    import SVGsettings from "../svgs/settings.svelte";

    let config = {
        lifespan: 5000, //todo: list 
        laneNumber: new Array(8),
        bugsNumber: new Array(30),
        gameLength: 1000 * 60 * 8, // 8 minutes
    };
    // State stuff
    let gameStatus: Status = "new";
    let startTime = 0;
    let lastTime = 0;
    let bugs = [];

    const tick = (timestamp: number) => {
        if (startTime === 0) {
            startTime = timestamp;
        }
        lastTime = timestamp - startTime;
        bugs.forEach((bug) => {
            if (bug.tapable === false && lastTime > (bug.delay + bug.lifespan)) {
                bug.tapable = true;
                bug.value = bug.value + 1;
            }
        });
        bugs = bugs;

        if (Math.floor(timestamp / 1000) % 5 === 0) {
            // addBox();
        }

        if (lastTime > config.lifespan * 5) {
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
    }

    function start() {
        if (gameStatus === "active") {
            return;
        }
        bugs = generateBugs();
        console.info(bugs);
        gameStatus = "active";
        requestAnimationFrame(tick);
        // countdown = config.gameLength / 100
    }

</script>

<div id="container" class="flex w-screen h-screen">
    <div id="controls" class="flex flex-col justify-center items-center w-16">
        {#if gameStatus === "new"}
            <button class="cursor-pointer" on:click={start}><SVGplay/></button>
            <a class="cursor-pointer" href="/settings"><SVGsettings/></a>
        {:else}
            <button on:click={stop}><SVGstop/></button>
            <h4>{startTime.toFixed(1)}</h4>
            <h4>{lastTime.toFixed(1)}</h4>
        {/if}
        <h4>{gameStatus}</h4>
    </div>

    {#each config.laneNumber as _, i}
        <Lane index={i} />
    {/each}

    {#if gameStatus === "active"}
        {#each bugs as bug, i}
            <Bug
                value={bug.value}
                isTapable={bug.isTapable}
                isMovesUp={bug.isMovesUp}
                --scale={getRandomInt(2, 3.5) / 10}
                --offset="{((bug.laneIndex + 0.5) / config.laneNumber.length) *
                    100}%"
                --delay="{bug.delay}ms"
                --speed="{getRandomInt(10, 15)}s"
            />
        {/each}
    {/if}
</div>

