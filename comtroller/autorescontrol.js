import dbknex from '../database/db_config.js'

export const buscaautor = async (req,res) =>{
    try{
        const autor = await dbknex("autores").select('*')
        res.status(200).json(autor);

    } catch(error){
        res.status(500).json({message : error.message})
    }
}

export const criarautor = async (req,res) =>{
     const {nome,idade,nacionalidade} = req.body;

     if(!nome || !idade || !nacionalidade){
        res.status(400).json({message : "invalido" })
     }

     try{

       const autor = await dbknex('autores').insert({ nome,idade,nacionalidade })
       res.status(201).json(autor)

     } catch(error){
        res.status(500).json({message : error.message})
    }
}

export const buscaautoresid = async (req,res) => {
    const {autoresid} = req.params;

    try{
        const autores = await dbknex('autores').select('*').where({ id : autoresid})
        res.status(200).json(autores)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

export const deletaautoresid = async (req,res) => {
    const {autoresid} = req.params;

    try{
        const autores = await dbknex('autores').delete().where({ id : autoresid})
        res.status(200).json(autores)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}
