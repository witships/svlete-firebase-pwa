<script lang="ts">
	import HeaderNav from '$lib/HeaderNav.svelte';
	import { userName } from '$lib/store';
</script>

<HeaderNav />

<nav>
	<ul>
		<li><a href="/">トップ</a></li>
		<li><a href="/about">about</a></li>
	</ul>
</nav>

<slot />

<style lang="scss">
	:global(body) {
		margin: 0;
	}
</style>
