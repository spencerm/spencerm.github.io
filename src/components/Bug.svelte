<script lang="ts">
    import { killCount } from "$lib/stores";

    let isActive = true;
    export let isTapable = false;
    export let isMovesUp = true;
    export let value: Number;

    const tap = () => {
        if (isTapable) {
            isActive = false;
            killCount.increment();
        }
    };
    const die = () => {
        isActive = false;
        console.log(value + " died by timeout");
    };
    const classes = () => {
        if (isMovesUp) {
            return "fixed positioner move-up";
        } else {
            return "fixed positioner move-down";
        }
    };
</script>

{#if isActive}
    <div class={classes()} on:animationend={die}>
        <div class="positioner-inner">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="bug flex select-none {isTapable && "cursor-pointer"}" on:click={tap}>
                {value}
            </div>
        </div>
    </div>
{/if}

<style>
    .positioner {
        --bubble-size: calc(200px * var(--scale));
        position: fixed;
        z-index: 99;
        left: calc(var(--offset) - var(--bubble-size) / 2);
        user-select: none;
    }
    .move-up {
        animation: moveup var(--speed) linear forwards;
        animation-delay: var(--delay);
        bottom: calc(var(--bubble-size) * var(--position-multipler));
    }
    .move-down {
        animation: movedown var(--speed) linear forwards;
        animation-delay: var(--delay);
        top: calc(var(--bubble-size) * var(--position-multipler));
    }

    .positioner-inner {
        animation: wobble calc(var(--speed) / 3) ease-in-out alternate infinite;
        animation-delay: inherit;
    }

    .bug {
        width: var(--bubble-size);
        height: var(--bubble-size);
        background: var(--color);
    }

    @media (prefers-reduced-motion: reduce) {
        .positioner-inner {
            animation: none;
        }
    }

    @keyframes moveup {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            transform: translate3d(
                0,
                calc(
                    -70vh + var(--position-multipler) * var(--bubble-size) / 2
                ),
                0
            );
        }
    }

    @keyframes movedown {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            transform: translate3d(
                0,
                calc(70vh - var(--position-multipler) * var(--bubble-size) / 2),
                0
            );
        }
    }

    @keyframes wobble {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            transform: translate3d(30px, 0, 0);
        }
    }
</style>
