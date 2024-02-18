<div class="wapper">
	<form class="login-form" id="signup">
		<h3>会員登録</h3>
		<label for="email">ID(mail-adress)</label>
		<input type="email" id="email" autocomplete="off" />
		<label for="password">PW</label>
		<input type="password" id="password" autocomplete="off" />
		<div class="btns">
			<a href="/">
				<button>キャンセル</button>
			</a>
			<button class="yes" type="submit">登録</button>
		</div>
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
		}
	}
</style>
