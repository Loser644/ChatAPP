import {database} from '../../Controllers/myConnectionFile.js';


function getSuggestion(username,takenList) {
    let suggestion = []
    let num = Math.floor(Math.random() * 1000);

    while (suggestion.length<3) {
        let candidate = `${username}${num}`;
        if (!takenList.includes(candidate)) {
            suggestion.push(candidate)
        }
        num++;
    }

    return suggestion
}

export const getUsers = async (rkv,rspo) => {
   let {username} = rkv.query;
    try {
    let [isrow] = await database.query('SELECT username FROM USERS WHERE username=?',[username]);
        console.log(isrow)
    if (isrow.length===0) {
        return rspo.status(201).send({avalable:true,suggestion:[]});
    }

    const [similerRow] = await database.query(`
            SELECT username
            FROM users
            WHERE username LIKE ?
            OR SOUNDEX(username) = SOUNDEX(?)
         LIMIT 20`,[`${username}%`,username]);

    const takenList = similerRow.map(row=>row.username);
    
    const suggestion = getSuggestion(username,takenList)
    rspo.status(202).send({avalable:false,suggestion,takenList})
   } catch (error) {
    
   }
}