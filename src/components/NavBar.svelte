<script>

	export let menu = 1;
</script>

<main>
	<div class="navbar-wrapper">
		<ul id="navbar">
			<li><a href="/" on:click|preventDefault={() => (menu = 1)}>Home</a></li> |
			<li><a href="/" on:click|preventDefault={() => (menu = 2)}>About</a></li> |
			<li><a href="/" on:click|preventDefault={() => (menu = 3)}>Three</a></li> |
			<li><a href="/" on:click|preventDefault={() => (menu = 4)}>Four</a></li>
		</ul>
	</div>
</main>

<style>
	ul#navbar li {
		display: inline;
	}
</style>