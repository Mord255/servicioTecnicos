const express = require("express");
const routes = express.Router();

routes.get('/getLogin/:usuario/:password',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            console.log(req);
            conn.query('SELECT id_tecnicos,correo_tecnicos,password_Tecnicos FROM tecnicos WHERE correo_tecnicos = ? AND password_Tecnicos = ?  ' ,[req.params.usuario,req.params.password], (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.get('/getMostrarTecnicos',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('SELECT id_tecnicos,nombre_tecnicos,img_tecnicos,ciudad_tecnicos,distrito_tecnicos FROM tecnicos ' , (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.get('/getMostrarTecnico/:id_tecnicos',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('SELECT * FROM tecnicos INNER JOIN redes ON tecnicos.id_tecnicos=redes.id_tecnicos WHERE tecnicos.id_tecnicos = ?' ,[req.params.id_tecnicos], (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.get('/getRegistro/:nombre/:correo/:password/:telefono',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('INSERT INTO tecnicos(nombre_tecnicos,correo_tecnicos,password_Tecnicos,telefono_tecnicos,img_tecnicos,pais_tecnicos,ciudad_tecnicos,distrito_tecnicos,experiencia_tecnicos) VALUES (?,?,?,?,"","","","","")' ,[req.params.nombre,req.params.correo,req.params.password,req.params.telefono], (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.get('/getModificarTecnico/:nombre/:correo/:password/:telefono/:img/:pais/:ciudad/:distrito/:experiencia/:id_tecnicos',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('UPDATE tecnicos SET nombre_tecnicos=?,correo_tecnicos=?,password_Tecnicos=?,telefono_Tecnicos=?,img_tecnicos=?,pais_tecnicos=?,ciudad_tecnicos=?,distrito_tecnicos=?,experiencia_tecnicos=? WHERE id_tecnicos = ?' ,[req.params.nombre,req.params.correo,req.params.password,req.params.telefono,req.params.img,req.params.pais,req.params.ciudad,req.params.distrito,req.params.experiencia,req.params.id_tecnicos], (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.get('/getModificarTecnicoRedes/:link_facebook/:link_whatsapp/:link_instagram/:id_tecnicos',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('UPDATE redes SET facebook_redes=?,whatsapp_redes=?,instagram_redes=? WHERE id_tecnicos = ?' ,[req.params.link_facebook,req.params.link_whatsapp,req.params.link_instagram,req.params.id_tecnicos], (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})
module.exports = routes;