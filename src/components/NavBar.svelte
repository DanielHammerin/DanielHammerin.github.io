<script>
	import { Router, Route, Link } from 'svelte-routing';
	import About from './About.svelte';
	import Home from './Home.svelte';
	import Projects from './Projects.svelte'
	export let url = '';

	function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
		const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

		// The object returned here is spread on the anchor element's attributes
		if (isActive) {
			return { class: "active" };
		}
		return {};
	}

</script>

<Router url='{url}'>
	<nav>
		<div class="navitem-wrapper"><Link class="link" getProps="{getProps}" to="/" >Home</Link></div>
		<div class="navitem-wrapper"><Link class="link" getProps="{getProps}" to="/projects" >Projects</Link></div>
		<div class="navitem-wrapper" style="float:right"><Link class="link" getProps="{getProps}" to="/about" >About</Link></div>
	</nav>

	<div>
		<Route path='/'><Home /></Route>
		<Route path='/projects:id' component='{Projects}'/>
		<Route path='/about' component='{About}'/>
	</div>
</Router>

<style>
	nav {
		opacity: 0;
		animation: fadeIn 2s;
		animation-delay: 3s;
		animation-fill-mode: forwards;
		list-style-type: none;
		margin-top: 1em;
		padding: 0;
		overflow: hidden;
		background-color: rgb(196, 196, 196, 0.5);
		border-radius: 1em;
	}

	.navitem-wrapper {
		display: inline-block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	.navitem-wrapper a {
		color: white;
	}

	.navitem-wrapper a:hover:not(.active) {
		background-color: #111;
	}

	.active {
		background-color: rgb(255, 130, 80);
	}

	@keyframes fadeIn {
		0% {opacity:0;}
		100% {opacity:1;}
	}
</style>