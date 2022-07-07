import axios from "axios"
import { Request, Response } from "express"
import db from "../config/db";

export async function postBattle(req: Request,res: Response){
    const { firstUser, secondUser } : {firstUser: string, secondUser: string} = req.body;
    try{
    //validação para verificar se está preenchido com os nomes   
    //service para verificar se os usuários existem
    const responses = [axios.get(`https://api.github.com/users/${firstUser}/starred`), axios.get(`https://api.github.com/users/${secondUser}/starred`)]
    const [firstUserStarred,secondUserStarred] = await Promise.all(responses)

    const firstUserStar : number = firstUserStarred.data.length
    const secondUserStar : number = secondUserStarred.data.length

    if(firstUserStar>secondUserStar){
        const result = await db.query(`SELECT * FROM users WHERE username=$1`,[firstUserStar])
        
        await db.query(`INSERT INTO fighters (username,wins,losses,draws)`,[])
        return res.json({"winner": firstUser,"loser": secondUser, "draw": false})
    }

    if(firstUserStar<secondUserStar){
        return res.json({"winner":secondUser ,"loser": firstUser, "draw": false})
    }
    if(firstUserStar===secondUserStar){
        return res.json({"winner":null ,"loser": null, "draw": true})
    }



    }catch(e){
        console.error(e)
    }
}


