import { Thermostat } from '../src/thermo'

it('has a starting temperature of 20', () => {
  let thermo = new Thermostat()
  expect(thermo.temperature).toBe(20)
});
