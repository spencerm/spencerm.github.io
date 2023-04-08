<script lang="ts">
    export let width = 100;
    export let x = 0;
</script>

<div class="lane" style="width: {width}%; left: {x}%;"></div>

<style>
    .lane {
        height: 100vh;
        position: absolute;
        background-color: #141313de;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-left: #000 5px solid;
        border-right: #000 5px solid;
    }
</style>