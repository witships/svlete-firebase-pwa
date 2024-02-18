<script lang="ts">
	import { userName, showLogin } from '$lib/store';
	import { auth } from '$lib/firebase'; //firebase.jsのauthを通じて初期化
	import { signInWithEmailAndPassword } from 'firebase/auth'; // ログイン機能を利用
	import { goto } from '$app/navigation';

	// ログイン処理
	let email = '';
	let password = '';
	let isError = false;
	function login() {
		signInWithEmailAndPassword(auth, email, password)
			// 成功時
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('ログインしました', user.email);
				$userName = user.email || '';
				$showLogin = false;
				isError = false;
				goto('/');
			})
			// 失敗時
			.catch((error) => {
				isError = true;
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log('ログインに失敗しました', errorCode, errorMessage);
			});
	}
</script>

<form class="wapper" id="login">
	<div class="login-form">
		<h3>ログイン</h3>
		<label for="email">ID(mail-adress)</label>
		<input type="email" id="email" autocomplete="on" bind:value={email} />
		<label for="password">PW</label>
		<input type="password" id="password" autocomplete="on" bind:value={password} />
		<div class="btns">
			<button on:click={() => ($showLogin = false)}>キャンセル</button>
			<button class="yes" on:click={login}>ログイン</button>
		</div>
		{#if isError}
			<div class="error">ログインに失敗しました<br />ID・PWを確認してください</div>
		{/if}
	</div>
</form>

<style lang="scss">
	.wapper {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: #00000090;
		display: flex;
		.login-form {
			padding: 1rem;
			background-color: var(--back-color);
			min-width: 500px;
			max-width: 800px;
			margin: auto;
			border-radius: 1rem;
			input {
				display: block;
				width: 100%;
				font-size: x-large;
				padding: 0.5rem;
				box-sizing: border-box;
				margin-bottom: 2rem;
			}
			.btns {
				display: flex;
				justify-content: space-around;
				button {
					font-size: large;
				}
			}
			.error {
				margin-top: 1rem;
				text-align: center;
				color: red;
				font-size: large;
			}
		}
	}
</style>
