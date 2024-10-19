<script lang="ts">
	import { createState, ScottState } from './state.svelte';
	let {
		name
	}: {
		name: string;
	} = $props();

	const myState = createState();
	const myStateTwo = new ScottState();
</script>

<div>
	<h1>
		{name ? name : 'User'}'s Form
	</h1>
	<button onclick={myState.up}>{myState.value}</button>
	<button onclick={() => myStateTwo.up()}>{myStateTwo.value}</button>
</div>
