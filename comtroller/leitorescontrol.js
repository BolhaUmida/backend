import dbknex from '../database/db_config.js'

export const buscaleitores = async (req,res) =>{
    try{
        const manga = await dbknex("leitores").select('*')
        res.status(200).json(manga);

    } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const criarleitor = async (req,res) =>{
     const {username,email,senha,idade} = req.body;

     if(!username || !email || !senha || !idade){
        res.status(400).json({message : "invalido" })
     }

     try{

       const leitor = await dbknex('leitores').insert({ nome })
       res.status(201).json(leitor)

     } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const buscaleitoresid = async (req,res) => {
    const {mangasid} = req.params;

    try{
        const mangas = await dbknex('leitores').select('*').where({ id : mangasid})
        res.status(200).json(mangas)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

export const deletaleitoresid = async (req,res) => {
    const {leitoresid} = req.params;

    try{
        const leitores = await dbknex('leitores').delete().where({ id : leitoresid})
        res.status(200).json(leitores)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}














