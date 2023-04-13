module.exports = (connex, Sequelize) => {

    const Pastry = connex.define('pastry', {
        name: {
            type: Sequelize.STRING
        }, 
        category: {
            type: Sequelize.STRING
        }, 
        description: {
            type: Sequelize.TEXT
        }, 
        price: {
            type: Sequelize.REAL
        }, 
        photo: {
            type: Sequelize.STRING
        }, 
    });

    return Pastry;

};
