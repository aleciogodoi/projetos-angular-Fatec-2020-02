import { NumerosRomanosPipe } from './numeros-romanos.pipe';

describe('NumerosRomanosPipe', () => {
  it('create an instance', () => {
    const pipe = new NumerosRomanosPipe();
    expect(pipe).toBeTruthy();
  });
});
