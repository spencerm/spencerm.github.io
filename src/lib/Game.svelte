<script lang="ts">
    import Box from "./Box.svelte";
    import Lane from "./Lane.svelte";
    import { onMount, onDestroy } from "svelte";

    let config = {
        lanes: 8,
        gameLength: 1000 * 60 * 8, // 8 minutes
    }
    const colors = ["red", "green", "blue", "yellow", "purple"]
    let enabled = false
    let countdown = 0
    let intervalId = 0
    let boxes = []

    function tick() {
        countdown --

        if( countdown % 50 === 0 ) {
            const color = colors[Math.floor(Math.random() * colors.length)]
            const x = Math.floor(Math.random() * window.innerWidth)
            const y = Math.floor(Math.random() * window.innerHeight)
            const box = { color, x, y, vx: 1, vy: 1 }
            boxes = [...boxes, box]
        }
        
    }

    function removeBox(index) {
        console.info("removeBox", index)
        boxes = boxes.filter((_, i) => i !== index)
    }

    function animate() {
        boxes = boxes.map((box, i) => {
            const x = box.x + box.vx
            const y = box.y + box.vy
            const vx = x < 0 || x > window.innerWidth ? -box.vx : box.vx
            const vy = y < 0 || y > window.innerHeight ? -box.vy : box.vy
            return { ...box, x, y, vx, vy };
        });
        requestAnimationFrame(animate);
    }

    function clear() {
        clearInterval(intervalId)
        boxes = []
        enabled = false
    }

    function start() {
        if (!enabled) {
            intervalId = setInterval(tick, 100)
            countdown = config.gameLength / 100
            enabled = true
        }
    }

    onMount(() => {
        requestAnimationFrame(animate);
        return () => clearInterval(intervalId);
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
</script>

<div id="container">

    <div style="display:flex; flex-direction: row; align-items: center;">
    {#if enabled === false}
        <button on:click={start}>Start</button>
    {:else}
        <button on:click={clear}>Stop</button>
        <h4>{(countdown / 60).toFixed(3)}</h4>
    {/if}
    </div>

    {#each Array(config.lanes) as _, i}
        <Lane width={100 / config.lanes} x={i*100 / config.lanes} />
    {/each}

    {#each boxes as box, i}
        <Box color={box.color} x={box.x} y={box.y} on:remove={() => removeBox(i)} />
    {/each}

</div>

<style>
    #container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(57, 34, 17);
    }
</style>