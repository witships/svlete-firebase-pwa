<script lang="ts">
	import '../app.scss';
	import HeaderNav from '$lib/HeaderNav.svelte';
	import { userName, showLogin } from '$lib/store';
	import Login from '$lib/Login.svelte';
</script>

<HeaderNav />

<nav>
	<ul>
		<li><a href="/">トップ</a></li>
		<li><a href="/about">about</a></li>
	</ul>
</nav>

<slot />

<!-- ログイン -->
{#if $showLogin}
	<Login />
{/if}
