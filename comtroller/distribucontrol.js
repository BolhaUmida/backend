import dbknex from '../database/db_config.js'

export const buscadistribuidora = async (req,res) =>{
    try{
        const distribuidora = await dbknex("distribuidora").select('*')
        res.status(200).json(distribuidora);

    } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const criardistribuidora = async (req,res) =>{
     const {nome,localizacao} = req.body;

     if(!nome || !localizacao){
        res.status(400).json({message : "invalido" })
     }

     try{

       const distribuidora = await dbknex('distribuidora').insert({ nome })
       res.status(201).json(distribuidora)

     } catch(error){
        req.status(500).json({message : error.message})
    }
}

export const buscadistribuidoraid = async (req,res) => {
    const {distribuidoraid} = req.params;

    try{
        const distribuidora = await dbknex('distribuidora').select('*').where({ id : distribuidoraid})
        res.status(200).json(distribuidora)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}

export const deletadistribuidoraid = async (req,res) => {
    const {distribuidoraid} = req.params;

    try{
        const distribuidora = await dbknex('distribuidora').delete().where({ id : distribuidoraid})
        res.status(200).json(distribuidora)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}
