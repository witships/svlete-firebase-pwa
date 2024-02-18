<script lang="ts">
	import { userName } from '$lib/store';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h3>{$userName}</h3>

<style lang="scss">
	h1 {
		background-color: aqua;
	}
</style>
