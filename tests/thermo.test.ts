import { Thermostat } from '../src/thermo'

it('has a starting temperature of 20', () => {
  let thermo = new Thermostat();
  expect(thermo.temperature).toBe(20)
});

it('up increases temperature()', () => {
  let thermo = new Thermostat();
  thermo.up();
  expect(thermo.temperature).toBe(21)
});


it('down() decreases temperature', () => {
  let thermo = new Thermostat();
  thermo.down();
  expect(thermo.temperature).toBe(19)
});

it('has minimum temperature of 10', () => {
  let thermo = new Thermostat();
  for(let i = 0; i < 11; i++) {
    thermo.down();
  };
  expect(thermo.temperature).toBe(10)
})
