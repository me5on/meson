import IS from '@me5on/is';


const {arr} = IS;


const respread = (

    (...$$) => {

        if (!$$?.length) {
            return void (1);
        }
        
        let [first] = $$;

        if (0 === first?.length) {
            return first;
        }

        if (1 === first?.length) {
            [first] = first;
        }

        if (!arr(first)) {
            first = [first];
        }

        return first;

    }

);


export default respread;
