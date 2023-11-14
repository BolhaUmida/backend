import dbknex from '../database/db_config.js'

export const buscamanga = async (req,res) =>{
    try{
        const manga = await dbknex("mangas").select('*')
        res.status(200).json(manga);

    } catch(error){
        res.status(500).json({message : error.message})
    }
}
export const mostramanga = async (req,res) => {
    
    try{
        const manga = await dbknex('mangas')
        .select('mangas.id','mangas.nome','mangas.avaliacao','manga.imagem','mangas.descricao','autores.nome AS autores','distribuidora.nome AS distribuidora', 'generos.nome AS generos' )
        .join('distribuidora','mangas.distribuidoraid', '=' , "distribuidora.id")
        .join('generos','mangas.generosid', '=' , "generos.id")
        .join('autores','mangas.autoresid', '=' , "autores.id")
       
        
        res.status(200).json(manga);


    }catch(error){
        res.status(500).json({message : error.message})

    }
}

export const criarmanga = async (req,res) =>{
     const {nome,clasificacao,avaliacao,date,imagem,descricao,autoresid,distribuidoraid,generosid} = req.body;

     if(!nome || !clasificacao || !avaliacao || !date || !imagem || !descricao || !autoresid || !distribuidoraid || !generosid){
        res.status(400).json({message : "invalido" })
     }

     try{

       const manga = await dbknex('mangas').insert({ nome,clasificacao,avaliacao,date,descricao,autoresid,distribuidoraid,generosid,imagem })
       res.status(201).json(manga)

     } catch(error){
        res.status(500).json({message : error.message})
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


export const mostramangaporId = async (req,res) => {
    const { mangaId } = req.params
    try{
        const manga = await dbknex('mangas')
        .select('mangas.id','mangas.nome','mangas.avaliacao','mangas.imagem','mangas.descricao','autores.nome AS autores','distribuidora.nome AS distribuidora', 'generos.nome AS generos' )
        .join('distribuidora','mangas.distribuidoraid', '=' , "distribuidora.id")
        .join('generos','mangas.generosid', '=' , "generos.id")
        .join('autores','mangas.autoresid', '=' , "autores.id")
        .where({ 'mangas.id': mangaId })

        
        res.status(200).json(manga);


    }catch(error){
        res.status(500).json({message : error.message})

    }
}
