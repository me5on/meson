import {describe, expect, it} from '@jest/globals';
import dv$ from './dv$.core.js';


const k = $ => () => $;
const id = $ => $;


describe('dv$', () => {

    it(
        'is a function',
        () => void expect(dv$).toBeFun(),
    );

    it.each([
        // result, list,cli
        [void (1), void (1), void (1)],
        [void (1), '', ''],
        [void (1), [], {}],
        [void (1), [{test: 'two'}, {test: 'one'}], {cmd: 'one'}],
        [void (1), [{test: 'two'}, {test: 'one', run: id}], {cmd: 'one'}],
        ['flg', [{test: 'two'}, {test: 'one', run: id}], {cmd: 'one', flg: 'flg'}],
        ['two', [{test: id, run: k('two')}, {test: 'one', run: id}], {cmd: 'one', flg: 'flg'}],
    ])(
        'returns the result %p for list %p and cli input %p',
        async (result, list, cli) => void (

            expect(await dv$(list, cli)).toBe(result)

        ),
    );

});
