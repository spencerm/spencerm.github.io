<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let color = 'red';
  export let x = 0;
  export let y = 0;

  const dispatch = createEventDispatcher()
  
  let number = Math.ceil(Math.random() * 3)

</script>

<div
  style="
    position: absolute;
    left: {x}px;
    top: {y}px;
    width: 50px;
    height: 50px;
    background-color: {color};
    cursor: pointer;
  "
  on:click={() => dispatch('remove')}
>
<h2>{number}</h2>
</div>
