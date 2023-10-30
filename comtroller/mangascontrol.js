import dbknex from '../database/db_config.js'

export const buscamanga = async (req,res) =>{
    try{
        const manga = await dbknex("mangas").select('*')
        res.status(200).json(manga);

    } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const criarmanga = async (req,res) =>{
     const {nome,clasificacao,avaliacao,date,distribuidoraid,generosid} = req.body;

     if(!nome || !clasificacao || !avaliacao || !date || !distribuidoraid || !generosid){
        res.status(400).json({message : "invalido" })
     }

     try{

       const manga = await dbknex('mangas').insert({ nome })
       res.status(201).json(manga)

     } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const buscamangasid = async (req,res) => {
    const {mangasid} = req.params;

    try{
        const mangas = await dbknex('mangas').select('*').where({ id : mangasid})
        res.status(200).json(mangas)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

export const deletamangasid = async (req,res) => {
    const {mangasid} = req.params;

    try{
        const mangas = await dbknex('mangas').delete().where({ id : mangasid})
        res.status(200).json(mangas)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}
