export default class Team {
	constructor() {
		this.members = new Set();
	}
	add(character) {
		if (this.members.has(character)) {
			throw new Error('Такой игрок уже есть');
		}

		this.members.add(character);
	}
	addAll(characters) {
		for (const char of characters) {
			if (!this.members.has(char)) {
				this.members.add(char);
			}
		}
	}
	toArray() {
		return [...this.members];
	}
}
