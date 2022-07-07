import axios from "axios"
import { Request, Response } from "express"

export async function getRanking(req: Request,res: Response){
    const { firstUser, secondUser } : {firstUser: string, secondUser: string} = req.body;
    try{
   
    }catch(e){
        console.error(e)
    }
}


