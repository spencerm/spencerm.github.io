<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Box } from "../types";

    export let index: number;

    // Receive boxs as a prop
    export let boxs: Box[] = [];

    const dispatch = createEventDispatcher();

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="lane">
    <!-- Render boxs filtered by the laneIndex prop -->
    {#each boxs as box}
        <slot name="box" {box} />
    {/each}
</div>

<style>
    .lane {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 100vh;
        border: 1px solid black;
    }
</style>
