<script lang="ts">
    let isActive = true;
    export let isTapable = false;
    export let isMovesUp = true;
    export let value: Number;

    const tap = () => {
        if (isTapable) {
            isActive = false;
        }
    };
    const die = () => {
        isActive = false;
    }
    const classes = () => {
        if (isMovesUp){
            return 'positioner move-up'
        } else {
            return 'positioner move-down'
        }
    }
</script>

{#if isActive}
    <div class={classes()} on:animationend={die}>
        <div class="positioner-inner">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="bubble" on:click={tap}>
                {value}
            </div>
        </div>
    </div>
{/if}

<style>
    .positioner {
        --bubble-size: calc(200px * var(--scale));
        position: fixed;
        z-index: var(--zindex, 99);
        left: var(--offset);
    }
    .move-up {
        animation: moveup var(--speed) linear forwards;
        animation-delay: var(--delay);
        bottom: calc(var(--bubble-size) * -2);
    }
    .move-down {
        animation: movedown var(--speed) linear forwards;
        animation-delay: var(--delay);
        top: calc(var(--bubble-size) * -2);
    }

    .positioner-inner {
        animation: wobble 2s ease-in-out alternate infinite;
        animation-delay: inherit;
    }

    .bubble {
        width: var(--bubble-size);
        height: var(--bubble-size);

        border-radius: 100%;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2),
            inset 0px 5px 15px 2px rgba(255, 255, 255, 1);

        backdrop-filter: blur(1px);

        display: flex;
        justify-content: center;
        align-items: center;
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
                calc((-2.5 * var(--bubble-size)) - 60vh),
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
                calc((-2.5 * var(--bubble-size)) + 70vh),
                0
            );
        }
    }

    @keyframes wobble {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            transform: translate3d(42px, 0, 0);
        }
    }
</style>
