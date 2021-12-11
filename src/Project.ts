import Tester from './Tester';
import Train from './Train';

const tester = new Tester();

tester.start({
    trainConstructor: Train,
    moverConstructors: [],
    tests: []
});

console.log('its working');
