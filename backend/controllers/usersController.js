

router.patch('/:id', requireUser, async (req, res, next) => {  
    try {
        let user = await User.findById(req.params.id) 
        if (!user.user._id.equals(req.user._id)){ 
            const error = new Error('You can not make this change');
            error.statusCode = 400;
            error.errors = { message: 'Please do not edit attributes that do not belong to you' }
        } else {
            
            user = await User.findOneAndUpdate({ _id: req.params.id },  {
                user: req.user._id,
                items: req.body.items,
                equipment: req.body.equipment,
                quest: req.body.quest,
                attack: req.body.attack,
                coins: req.body.coins,
                maxHealth: req.body,
                currentHealth: req.body.currentHealth

            }  )
            return res.json(user);
    }
    } catch (err) {
        next(err)
    }
})