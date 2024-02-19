<script lang="ts">
	import { userName } from '$lib/store';
	import { auth } from '$lib/firebase'; //firebase
	import { createUserWithEmailAndPassword } from 'firebase/auth'; //サインアップ
	import { goto } from '$app/navigation';

	// ユーザー登録
	let email = '';
	let password = '';
	let isError = false;
	function signup() {
		createUserWithEmailAndPassword(auth, email, password) // サインアップ実行
			// 成功
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('ユーザー登録しました', user);
				$userName = user.email || '';
				isError = false;
				goto('/');
			})
			// 失敗
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log('ユーザー登録に失敗しました', errorMessage);
				isError = true;
			});
	}

	// キャンセル
	function cancel() {
		email = '';
		password = '';
		isError = false;
	}
</script>

<div class="wapper">
	<form class="login-form" id="signup">
		<h3>会員登録</h3>
		<label for="email">ID(mail-adress)</label>
		<input type="email" id="email" autocomplete="off" bind:value={email} />
		<label for="password">PW</label>
		<input type="password" id="password" autocomplete="off" bind:value={password} />
		<div class="btns">
			<a href="/">
				<button on:click={cancel}>キャンセル</button>
			</a>
			<button class="yes" type="submit" on:click={signup}>登録</button>
		</div>
		{#if isError}
			<div class="error">ユーザー登録に失敗しました</div>
		{/if}
		<div></div>
	</form>
</div>

<style lang="scss">
	.wapper {
		.login-form {
			padding: 1rem;
			background-color: var(--back-color);
			width: 500px;
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
