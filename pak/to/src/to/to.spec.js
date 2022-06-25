import {describe, expect, it} from '@jest/globals';
import TO from './to.mod.js';


const props = [
    ['boolean', 'bool', 'bul'],
    ['string', 'str'],
    ['number', 'num'],
];


describe('module TO', () => {


    it('is a function', expect(TO).toBeFun);


    it(
        'returns itself for trivial call',
        () => void expect(TO()).toBe(TO), // eslint-disable-line new-cap
    );


    it(
        'has no extra properties',
        () => void expect(Object.keys(TO).flat()).toEqual(props.flat()),
    );


    describe.each([...props])('property', (prop, ...aliases) => {


        it(
            `"${prop}" is a function`,
            () => void expect(TO[prop]).toBeFun(prop),
        );


        it.each(aliases)(
            `"${prop}" has alias %p`,
            alias => void (
                expect(
                    [prop, alias, TO[prop]],
                ).toEqual(
                    [prop, alias, TO[alias]],
                )
            ),
        );

    });
});
