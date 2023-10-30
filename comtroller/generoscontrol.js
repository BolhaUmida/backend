import dbknex from '../database/db_config.js'

export const buscageneros = async (req,res) =>{
    try{
        const genero = await dbknex("generos").select('*')
        res.status(200).json(genero);

    } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const criargeneros = async (req,res) =>{
     const {nome} = req.body;

     if(!nome){
        res.status(400).json({message : "invalido" })
     }

     try{

       const genero = await dbknex('generos').insert({ nome })
       res.status(201).json(genero)

     } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const buscagenerosid = async (req,res) => {
    const {generosid} = req.params;

    try{
        const generos = await dbknex('generos').select('*').where({ id : generosid})
        res.status(200).json(generos)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

export const deletagenerosid = async (req,res) => {
    const {generosid} = req.params;

    try{
        const generos = await dbknex('generos').delete().where({ id : generosid})
        res.status(200).json(generos)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}
