// Jest has issues mocking built-in modules with ESM
// this constant tells functions it's OK to use mock

const testing = 'test' === process.env.NOTE_ENV;
const jesting = !!process.env.JEST_WORKER_ID;


// noinspection SpellCheckingInspection
const MOCKAROUND = testing || jesting;


export default MOCKAROUND;
