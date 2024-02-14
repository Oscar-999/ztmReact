class Elf {
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

const fiona = new Elf('Fiona', 'ninja starts');

const ogre = { ...fiona}
