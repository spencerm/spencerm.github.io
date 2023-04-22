<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import { writable } from "svelte/store";

    // export let appName: string;
    import Lane from "../components/Lane.svelte";
    // import Stopwatch from "../components/Stopwatch.svelte";
    import { chunkArr, getRandomInt } from "../utils";
    import type {
        Box,
        Component,
        IPlayChit,
        ITimeInfo,
        Status,
    } from "../types";

    let config = {
        laneNumber: 8,
        gameLength: 1000 * 60 * 8, // 8 minutes
    };
    // State stuff
    // let stopwatch: Stopwatch;
    let gameStatus: Status = "new";
    let gameDuration: ITimeInfo = {
        ms: 0,
        secs: 0,
        mins: 0,
    };
    let lastTime = 0;
    let lanes: number[] = Array(7).fill(0);
    let boxes: Box[] = [];

    const tick = (time: number) => {
        const deltaTime = time - lastTime;
        lastTime = time;
        for (const box of boxes) {
            // box.update(deltaTime);
        }

        if (Math.floor(time / 1000) % 5 === 0) {
            console.log("adding box");
            addBox();
        }

        if (gameStatus === "active") {
            requestAnimationFrame(tick);
        }
    };

    function handleClick(box: Box) {
        console.info("removeBox", box);
        boxes = boxes.filter((b) => b !== box);
    }

    function stop() {
        gameStatus = "new";
        boxes = [];
    }

    function start() {
        if (gameStatus === "active") {
            return;
        }
        gameStatus = "active";
        requestAnimationFrame(tick);
        // countdown = config.gameLength / 100
    }

    // const generateBoxes = () => {
    //     const colors = ["red", "green", "blue", "yellow", "purple"];
    //     const values = [1, 1, 2, 2, 3, 4, 5];
    //     const boxes: IPlayChit[] = [];
    //     colors.forEach((color) => {
    //         values.forEach((value, i) => {
    //             boxes.push({
    //                 key: `${color}-${i}`,
    //                 value: value,
    //                 color: color,
    //                 status: "new",
    //             });
    //         });
    //     });
    //     // shuffleArray(cards)

    //     lanes = chunkArr(boxes, config.laneNumber, true);
    // };

    function addBox() {
        const laneIndex = Math.floor(Math.random() * config.laneNumber);
        const value = Math.floor(Math.random() * 5) + 1;
        boxes = [...boxes, { laneIndex, color: "red", value, y: -10 }];
    }
</script>

<div id="container">
    <div
        style="display:flex; flex-direction: column; align-items: center; width: 90px;"
    >
        {#if gameStatus === "new"}
            <button on:click={start}>Start</button>
        {:else}
            <button on:click={stop}>Stop</button>
            <h4>{lastTime.toFixed(1)}</h4>
        {/if}
        <h4>{gameStatus}</h4>
    </div>

    {#each lanes as _, i}
        <Lane index={i}>
            {#each boxes.filter((b) => b.laneIndex === i) as box}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    style="
              position: absolute;
              top: {box.y}px;
              background-color: {box.color};
              width: 30px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              cursor: pointer;
            "
                    on:click={() => handleClick(box)}
                >
                    {box.value}
                </div>
            {/each}
        </Lane>
    {/each}
</div>

<style>
    #container {
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(57, 34, 17);
    }
</style>
