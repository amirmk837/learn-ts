class Earth {
  name: string;
  hasHuman: boolean;
  hasCountry: boolean;

  constructor(name: string, hasHuman: boolean, hasCountry: boolean) {
    this.hasHuman = hasHuman;
    this.hasCountry = hasCountry;
    this.name = name;
  }
}

class Asia extends Earth {
  cold: boolean;
  constructor(
    name: string,
    cold: boolean,
    hasHuman: boolean,
    hasCountry: boolean,
  ) {
    super(name, true, true);
    this.cold = cold;
  }
}

class Iran extends Asia {
  Population: number;

  constructor(name: string, Population: number) {
    super(name, false, true, true);
    this.Population = Population;
  }
}

const example = new Iran("iran", 85000000);

example.Population;
example.cold;
example.hasCountry;
example.hasHuman;
example.name;

console.log(example);

