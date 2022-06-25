import path from 'path';


const DIR = process.cwd();


export default Object.freeze({

    ver: path.join(DIR, 'ver.json'),
    pkg: path.join(DIR, 'package.json'),

});
