let productos ={
    head: function(req,res){
        //                     👇    este "producto" es el de views (producto.ejs)
        return res.render("/partials/head.ejs")
    }
}

module.exports= productos