const Usuario = require('../models/usuarios');
const { loginSchema } = require('../validators/usuario');
const { hashSenha } = require('../helpers/usuario'); 

const todosUsuarios = (req, res) => {
    Usuario.find()
    .then((usuarios)=>{
    if(Usuario.length < 0){
        res.status(204).json({message: 'não existem usuarios cadastrados'})
    }else{
        res.status(200).json(usuarios)
    }
    })
    .catch((err)=>{
        res.status(500).json(err)
      })
}

const cadastroUsuario = async (req, res, next)=>{
    const validaBody = await loginSchema.validate(req.body)
    try {
        const senhahash = await hashSenha(usuario.senha, res)

        try{
            const usuario= new Usuario({
                nome,
                email,
                senha,
            });

            usuario.save()
                .then((usuario)=>{
                res.status(201).json(usuario);
                })
                .catch(err => next(err));
        } catch (e) {
        return res.status(401).json({error: 'erro'});
        }
    }catch (e) {
        return res.status(401).json({error: 'erro'});
    }
}


module.exports = {
    todosUsuarios,
    cadastroUsuario
}