const express = require("express");
const routes = express.Router();
const axios = require("axios");

routes.post('/postLogin',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('SELECT id_tecnicos,correo_tecnicos,password_Tecnicos FROM tecnicos WHERE correo_tecnicos = ? AND password_Tecnicos = ?  ' ,[req.body.usuario,req.body.password], (err,rows) => {
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

routes.post('/postRegistro',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('CALL nueva_data(?,?,?,?,?,?,?,?,?,?,?,?)' ,[req.body.nombre,req.body.correo,req.body.password,req.body.img,req.body.pais,req.body.ciudad,req.body.distrito,req.body.experiencia,req.body.link_facebook,req.body.link_whatsapp,req.body.link_instagram,req.body.telefono], (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.post('/postModificarTecnico',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('UPDATE tecnicos SET nombre_tecnicos=?,correo_tecnicos=?,password_Tecnicos=?,telefono_Tecnicos=?,img_tecnicos=?,pais_tecnicos=?,ciudad_tecnicos=?,distrito_tecnicos=?,experiencia_tecnicos=? WHERE id_tecnicos = ?' ,[req.body.nombre,req.body.correo,req.body.password,req.body.telefono,req.body.img,req.body.pais,req.body.ciudad,req.body.distrito,req.body.experiencia,req.body.id_tecnicos], (err,rows) => {
                if (err) {
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.post('/postModificarTecnicoRedes',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err)
        }else{
            conn.query('UPDATE redes SET facebook_redes=?,whatsapp_redes=?,instagram_redes=? WHERE id_tecnicos = ?' ,[req.body.link_facebook,req.body.link_whatsapp,req.body.link_instagram,req.body.id_tecnicos], (err,rows) => {
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