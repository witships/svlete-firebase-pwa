<script lang="ts">
	import { userName } from '$lib/store';
</script>

<nav>
	<a href="/">たいとる</a>
	<button>新規登録</button>
	<button>ログイン</button>
	<button>{$userName}</button>
	<button>ログアウト</button>
</nav>
