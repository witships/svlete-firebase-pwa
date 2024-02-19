<script lang="ts">
	import { userName } from '$lib/store';
</script>

{#if $userName}
	<h1>Welcome, {$userName}さん</h1>
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h3>{$userName}</h3>

<style lang="scss">
	h1 {
		background-color: aqua;
	}
</style>
