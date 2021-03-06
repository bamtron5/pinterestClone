import * as express from 'express';
import * as passport from 'passport';
import {Post} from './../models/Post';
import {guard} from '../lib/guard';
import {isSession, hasRole} from '../lib/auth';
let router = express.Router();

router.get('/post',
  (req, res, next) => {
    Post.find()
      .sort({date: -1})
      .then((result) => {
        return res.json(result);
      }).catch((e) => {
        return next({message: 'Unable to retrieve posts.', error: e});
      });
  });

router.post('/post',
  isSession,
  passport.authenticate('jwt'),
  guard(['post:write']),
  (req, res, next) => {
    req.body.owner = req.user.username;
    Post.create(req.body)
      .then((result) => {
        return res.json(result);
      }).catch((e) => {
        return next({message: 'Unable to create post.', error: e});
      });
});

export = router;
