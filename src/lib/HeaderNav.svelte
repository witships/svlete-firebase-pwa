<script lang="ts">
	import { userName, showLogin } from '$lib/store';
	import { auth } from '$lib/firebase'; //firebase.jsのauthを通じて初期化
	import { signOut } from 'firebase/auth'; // ログアウト機能を利用
	import { goto } from '$app/navigation';

	function check() {
		if (auth.currentUser) {
			$userName = auth.currentUser.email || '';
			console.log('check', $userName);
		} else {
			console.log('ユーザーがログインしていません。');
		}
	}

	function logout() {
		signOut(auth)
			.then(() => {
				console.log('ログアウトしました');
				$userName = '';
				goto('/');
			})
			.catch((error) => {
				console.log(error);
			});
	}
</script>

<nav>
	<a href="/" class="logo">たいとる</a>
	<ul class="menu">
		<li>
			<button on:click={check}> 確認 </button>
		</li>
		{#if !$userName}
			<li>
				<a href="/signup">
					<button> 新規登録 </button>
				</a>
			</li>
			<li>
				<button on:click={() => ($showLogin = true)}>ログイン</button>
			</li>
		{:else}
			<li class="sub-menu">
				<button>{$userName}</button>
				<ul>
					<li><a href={null} on:click={logout}>ログアウト</a></li>
				</ul>
			</li>
		{/if}
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
			button {
				height: 100%;
			}
			a {
				cursor: pointer;
			}
		}
	}
</style>
