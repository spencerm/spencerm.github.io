<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Status } from "../types";

  // export let key = 0;
  export let laneIndex: number;
  export let status: Status = "new";
  export let color = "red";
  export let value = 1;
  export let hasOrientationDown = true;
  export let y = 0;

  const speed = 1;
  const height = 300;
  const dispatch = createEventDispatcher();

  function update (deltaTime: number){
    y -= (speed * deltaTime) / 1000;

    if (y < -height) {
      status = "complete";
    }
  };

  // let number = Math.ceil(Math.random() * 3)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  style="
    position: absolute;
    top: {y}px;
    width: 100%;
    height: 50px;
    cursor: pointer;
  "
  on:click={() => dispatch("remove")}
>
  <div
    style="
  width: 50px; height: 50px; margin: 0 auto; background-color: {color}; display: flex; flex-direction: column; justify-content: center; align-items: center
  "
  >
    <h2 style="margin: auto;">{value}</h2>
    <!-- <p style="margin: auto;">{key}</p> -->
  </div>
</div>
