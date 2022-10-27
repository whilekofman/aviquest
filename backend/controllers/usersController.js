const { router } = require("../app");
// const { findByIdAndUpdate } = require('../../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');



module.exports = { 
    updateAttributes: async (req, res, next) => {

        try { 
            let user = await User.findById(req.params.id) 
            console.log(user)
            if (!user._id.equals(req.user._id)){
                const error = new Error('You can not make this change');
                error.statusCode = 400;
                error.errors = { message: 'Please do not edit attributes that do not belong to you' }
            } else {
                user = User.updateOne( {_id: req.params.id }, { equipment: req.body.equipment,
                items: req.body.items,
                quest: req.body.quest,
                attack: req.body.attack,
                coins: req.body.coins,
                maxHealth: req.body.maxHealth,
                currentHealth: req.body.currentHealth,
                imageUrl: req.body.imageUrl,
                movingImageUrl: req.body.movingImageUrl
                }, (err, user) => {  
                    if (err) {
                        res.json(err)
                    } else {
                        
                        res.json(user)
                    }
                })

            }
        }

        catch(err){
            next(err)
        }
    }
}


