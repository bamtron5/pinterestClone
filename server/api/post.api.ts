import * as express from 'express';
import {Post} from './../models/Post';
let router = express.Router();

router.get('/post', (req, res, next) => {
  Post.find()
    .sort({date: -1})
    .then((result) => {
      return res.json(result);
    }).catch((e) => {
      return next({message: 'Unable to retrieve posts.', error: e});
    });
});

router.post('/post', (req, res, next) => {
  Post.create(req.body)
    .then((result) => {
      return res.json(result);
    }).catch((e) => {
      return next({message: 'Unable to create post.', error: e});
    });
});

export = router;
