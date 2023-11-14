import { Router, json } from "express";
import { buscageneros, criargeneros, deletagenerosid } from "./comtroller/generoscontrol.js";
import { buscamanga, criarmanga, deletamangasid, mostramanga, mostramangaporId } from "./comtroller/mangascontrol.js";
import { buscaleitores, criarleitor, deletaleitoresid } from "./comtroller/leitorescontrol.js";
import { buscaautor, criarautor, deletaautoresid } from "./comtroller/autorescontrol.js";
import { buscadistribuidora, criardistribuidora, deletadistribuidoraid } from "./comtroller/distribucontrol.js";
import { development } from "./database/knexfile.js";




const router = Router()
router.use(json())

router.get('/genero',buscageneros)
router.post('/genero',criargeneros)
router.delete('/genero/:generosid',deletagenerosid)

router.get('/manga', buscamanga)
router.get('/nManga' , mostramanga)
router.get('/nManga/:mangaId',mostramangaporId)
router.post('/manga', criarmanga)
router.delete('/manga/:mangasid',deletamangasid)

router.get('/leitores', buscaleitores)
router.post('/leitores', criarleitor)
router.delete('/leitores/:leitoresid',deletaleitoresid)

router.get('/autores', buscaautor)
router.post('/autores', criarautor)
router.delete('/autores/:autoresid',deletaautoresid)

router.get('/distribuidora', buscadistribuidora)
router.post('/distribuidora', criardistribuidora)
router.delete('/distribuidora/:distribuidoraid',deletadistribuidoraid)

export default router;