const pool = require('../config/db');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req.user;
  console.log('creating.. post');
  try {
    const newPost = await pool.query(
      'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
      [title, content, userId]
    );

    console.log('post created');

    res.json(newPost.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getPosts = async (req, res) => {
    console.log('getting.. post');
    try {
      const posts = await pool.query('SELECT * FROM posts');
      console.log('post getted');
      res.json(posts.rows);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  module.exports = { createPost, getPosts };
  
