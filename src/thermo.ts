export class Thermostat {
  DEFAULT_TEMP = 20;
  MINIMUM_TEMP = 10;
  temperature = this.DEFAULT_TEMP;

  up():void {
    this.temperature ++
  };

  down():void {
    this.temperature -- ;
    if (this.temperature < this.MINIMUM_TEMP) {
      this.temperature = 10
    };
  };
};
