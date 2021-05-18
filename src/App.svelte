<script>
	import NavBar from './components/NavBar.svelte';
	import Home from './components/Home.svelte';
	import About from './components/About.svelte';
</script>

<main>
	<div class="namebanner">
		<div class="typewriter">
			daniel hammerin
			<div class="border"/>
		</div>
	</div>
	
	<NavBar/>
	<div class="maincontent">
		{#if NavBar.menu === 1}
		<Home />
		{:else if NavBar.menu === 2}
		<About />
		{/if}
	</div>
	
</main>

<style>
	@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

	main {
		animation: fadeIn 2s;
		background-color: rgb(255, 130, 80);
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@keyframes fadeIn {
		0% {opacity:0;}
		100% {opacity:1;}
	}

	.typewriter {
		height: 40px;
		width: 600px;
		white-space: nowrap;
		overflow: hidden; 
		font-family: 'Source Code Pro', monospace;  
		font-size: 28px;
		color: #ff3e00;
		position: relative;
	}

	.border {
		border-bottom: solid 3px #ff3e00;
		position: absolute;
		right: -7px;
		width: 20px;
	}

	/* Animation */
	.typewriter {
		animation: animated-text 2s steps(20,end) 1s 1 normal both;
	}

	.border {
		animation: animated-cursor 1s steps(20,end) infinite;
	}

	/* text animation */
	@keyframes animated-text{
		from{width: 0;}
		to{width: 270px;}
	}

	/* cursor animations */
	@keyframes animated-cursor{
		from{border-bottom-color: #ff3e00;}
		to{border-bottom-color: transparent;}
	}

	.namebanner {
		height: fit-content;
		width: 740px;
		padding: 20px;
		background-color: #333;
		animation: slide-in-from-left 0.75s forwards;
	}

	@keyframes slide-in-from-left {
    	100% { left: 0; }
	}

	.maincontent {
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>