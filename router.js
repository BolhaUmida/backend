import { Router, json } from "express";
import { buscageneros } from "./comtroller/generoscontrol.js";
import { buscamanga } from "./comtroller/mangascontrol.js";
import { buscaleitores } from "./comtroller/leitorescontrol.js";
import { buscaautor } from "./comtroller/autorescontrol.js";
import { buscadistribuidora } from "./comtroller/distribucontrol.js";




const router = Router()
router.use(json())

router.get('/genero',buscageneros)

router.get('/manga', buscamanga)

router.get('/leitores', buscaleitores)

router.get('/autores', buscaautor)

router.get('/distribuidora', buscadistribuidora)

export default router;