const { celebrate, Joi } = require('celebrate');
const express = require('express');

const router = express.Router();
const { isURLValid } = require('../utils/constants');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  unlikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().required(isURLValid),
    }),
  }),
  createCard
);

router.delete(
  '/:cardId',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().alphanum().length(24).hex(),
    }),
  }),
  deleteCard
);

router.put(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().alphanum().length(24).hex(),
    }),
  }),
  likeCard
);

router.delete(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().alphanum().length(24).hex(),
    }),
  }),
  unlikeCard
);

module.exports = router;
