import Team from '../index';

describe('Team', () => {
	let team;

	beforeEach(() => {
		team = new Team();
	});

	test('создаёт пустую команду при инициализации', () => {
		expect(team.toArray()).toEqual([]);
	});

	test('добавляет персонажа через add()', () => {
		const character = { name: 'Warrior' };
		team.add(character);
		expect(team.toArray()).toEqual([character]);
	});

	test('выбрасывает ошибку при попытке добавить дубликат через add()', () => {
		const character = { name: 'Mage' };
		team.add(character);

		expect(() => team.add(character)).toThrow('Такой игрок уже есть');
	});

	test('addAll() добавляет несколько персонажей', () => {
		const characters = [
			{ name: 'Warrior' },
			{ name: 'Mage' },
			{ name: 'Rogue' },
		];

		team.addAll(characters);

		expect(team.toArray()).toEqual(characters);
	});

	test('addAll() добавляет несколько персонажей без задвоения', () => {
		const Warrior = { name: 'Warrior' };
		const Mage = { name: 'Mage' };
		const Rogue = { name: 'Rogue' };

		const currentCharacters = [Warrior, Mage, Rogue, Rogue];

		const exitCharacters = [Warrior, Mage, Rogue];

		team.addAll(currentCharacters);

		expect(team.toArray()).toEqual(exitCharacters);
	});

	test('toArray() возвращает массив персонажей в правильном порядке', () => {
		const char1 = { name: 'Warrior' };
		const char2 = { name: 'Mage' };

		team.add(char1);
		team.add(char2);

		expect(team.toArray()).toEqual([char1, char2]);
	});
});
