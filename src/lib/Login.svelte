<script lang="ts">
	import { userName, showLogin } from '$lib/store';
</script>

<form class="wapper" id="login">
	<div class="login-form">
		<h3>ログイン</h3>
		<label for="email">ID(mail-adress)</label>
		<input type="email" id="email" autocomplete="on" />
		<label for="password">PW</label>
		<input type="password" id="password" autocomplete="on" />
		<div class="btns">
			<button on:click={() => ($showLogin = false)}>キャンセル</button>
			<button class="yes">ログイン</button>
		</div>
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
		}
	}
</style>
