<script lang="ts">
	import { userName, showLogin } from '$lib/store';
</script>

<nav>
	<a href="/" class="logo">たいとる</a>
	<ul class="menu">
		<li>
			<a href="/signup">
				<button> 新規登録 </button>
			</a>
		</li>
		<li>
			<button on:click={() => ($showLogin = true)}>ログイン</button>
		</li>
		<li class="sub-menu">
			<button>{$userName}</button>
			<ul>
				<li><a href="/">ログアウト</a></li>
			</ul>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		padding: 0.5rem;
		background-color: #00000080;
		display: flex;
		.logo {
			color: white;
			text-decoration: none;
		}
		.menu {
			margin: 0 0 0 auto;
			display: flex;
			gap: 0.5rem;
			list-style: none;
		}
		.sub-menu {
			ul {
				background-color: aliceblue;
				list-style: none;
				padding: 0.5rem;
				position: absolute;
				right: 0.5rem;
				visibility: hidden;
			}
			&:hover ul {
				visibility: visible;
			}
		}
	}
</style>
