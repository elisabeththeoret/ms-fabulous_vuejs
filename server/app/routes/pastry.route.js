module.exports = app => {

    const pastry = require('../controllers/pastry.controller.js');
    const router = require('express') . Router();
    
    router.get('/', pastry.myFindAll);
    router.get('/:id', pastry.myFindOne);
    router.post('/', pastry.myCreate);
    router.put('/:id', pastry.myUpdate);
    router.delete('/:id', pastry.myDestroy);
    
    app.use('/api/pastry', router);

}
