//const dbjson = require("./loremarabic._db.json"),
const dbjs = require("loremarabic/src/db/loremarabic.db");
/**
 * get json from loremarabic.db.json  file then convert it to js object.
 *
 * @private
 * @memberOf  loremarabic
 * @since 1.0.1
 * @category db
 */
// let loremjsondb = () => {
//   try {
//     let fs = require("fs");
//     const lorem = fs.readFileSync("./loremarabic.db.json");
//     return JSON.parse(lorem);
//   } catch (error) {
//     return error;
//   }
// };

// let db = () => {
//   let jsondata = loremjsondb();
//  // let loremdata = dbjs;
//   return jsondata;
// }
//console.log(db());

module.exports = dbjs;