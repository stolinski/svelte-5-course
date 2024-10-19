export class ScottState {
	value = $state(0);

	up() {
		this.value += 1;
	}
}

export function createState() {
	let value = $state(0);

	function up() {
		value += 1;
	}

	return {
		get value() {
			return value;
		},
		set value(newValue) {
			value = newValue;
		},
		up
	};
}
