const pool = require('../config/db');

const getUserdetails = async (req, res) => {
    const {userId} = req.user;
    try{
        const userdetails = await pool.query(
            'SELECT username, email FROM users WHERE id = $1',
            [userId]
          );
      
          console.log('got user');
          console.log(userdetails);
          res.json(userdetails.rows[0]);
    }
    catch (error){
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}
module.exports = { getUserdetails};