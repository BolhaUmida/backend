import dbknex from '../database/db_config.js'

export const buscaleitores = async (req,res) =>{
    try{
        const leitor = await dbknex("leitores").select('*')
        res.status(200).json(leitor);

    } catch(error){
        res.status(500).json({message : error.message})
    }
}

export const criarleitor = async (req,res) =>{
     const {nome,email,senha,idade} = req.body;

     if(!nome || !email || !senha || !idade){
        res.status(400).json({message : "invalido" })
     }

     try{

       const leitor = await dbknex('leitores').insert({ nome,email,senha,idade })
       res.status(201).json(leitor)

     } catch(error){
        res.status(500).json({message : error.message})
    }
}

export const buscaleitoresid = async (req,res) => {
    const {leitoresid} = req.params;

    try{
        const leitor = await dbknex('leitores').select('*').where({ id : leitoresid})
        res.status(200).json(leitor)
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














