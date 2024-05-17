const express = require('express');
let router = express.Router();
const salondetheController = require('../controllers/salonDeThe.controller')

/**
 * @swagger
 * tags:
 *   name: Article
 *   description: Article API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: "Big Red"
 */

/**
 * @swagger
 * /salondethe/getAllArticle:
 *   get:
 *     tags: [Article]
 *     summary: Get all article
 *     responses:
 *       200:
 *         description: Liste des articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       500:
 *         description: Internal error
 */

router.get("/getAllArticle", salondetheController.getAllArticle);

/**
 * @swagger
 * /salondethe/createArticle:
 *   post:
 *     tags: [Article]
 *     summary: creer un nouvel article
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom_article
 *               - prix_article
 *             properties:
 *               nom_article:
 *                 type: string
 *               prix_article:
 *                 type: number
 *     responses:
 *       200:
 *         description: article creer avec succes
 *       500:
 *         description: Internal error
 */
router.post("/createArticle", salondetheController.createArticle);

/**
 * @swagger
 * /salondethe/deleteArticle:
 *   delete:
 *     tags: [Article]
 *     summary: supprime un article
 *     parameters:
 *       - in: query
 *         name: id_article
 *         required: true
 *         schema:
 *           type: integer
 *           description: id de l'article a supprimer
 *     responses:
 *       200:
 *         description: article supprimer avec succes
 *       500:
 *         description: Internal error
 */
router.delete("/deleteArticle", salondetheController.deleteArticle);

/**
 * @swagger
 * /salondethe/updateArticle:
 *   post:
 *     tags: [Article]
 *     summary: modifier un article
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_article
 *               - nom_article
 *               - prix_article
 *             properties:
 *               id_article:
 *                 type: integer
 *               nom_article:
 *                 type: string
 *               prix_article:
 *                 type: number
 *     responses:
 *       200:
 *         description: article modifier avec succes
 *       500:
 *         description: Internal error
 */
router.post("/updateArticle", salondetheController.updateArticle);

module.exports = router;