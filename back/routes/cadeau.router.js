const express = require('express');
let router = express.Router();
const cadeauController = require('../controllers/cadeau.controller')

router.use((req, res, next) => {
    console.log(`Requête reçue sur le routeur : ${req.originalUrl}`);
    next();
});

/**
 * @swagger
 * tags:
 *   name: Cadeau
 *   description: Cadeau API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Bougie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: "Rouge"
 *         prix:
 *           type: number
 *           example: 14.99
 *     The:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: "Earl Grey"
 *         prix:
 *           type: number
 *           example: 14.99
 *     Formule:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: "Earl Grey"
 *         prix:
 *           type: number
 *           example: 54.99
 *         id_bouquet:
 *           type: integer
 *           example: 1
 *         id_bougie:
 *           type: integer
 *           example: 1
 *         id_the:
 *           type: integer
 *           example: 1
 * 
 */

/**
 * @swagger
 * /cadeau/getAllBougie:
 *   get:
 *     tags: [Cadeau]
 *     summary: Get all bougie
 *     responses:
 *       200:
 *         description: Liste des bougies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bougie'
 *       500:
 *         description: Internal error
 */

router.get("/getAllBougie", cadeauController.getAllBougie);

/**
 * @swagger
 * /cadeau/createBougie:
 *   post:
 *     tags: [Cadeau]
 *     summary: creer une nouvelle bougie
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom_bougie
 *               - prix_bougie
 *             properties:
 *               nom_bougie:
 *                 type: string
 *               prix_bougie:
 *                 type: number
 *     responses:
 *       200:
 *         description: bougie creer avec succes
 *       500:
 *         description: Internal error
 */

router.post("/createBougie", cadeauController.createBougie);

/**
 * @swagger
 * /cadeau/deleteBougie:
 *   delete:
 *     tags: [Cadeau]
 *     summary: supprime une bougie
 *     parameters:
 *       - in: query
 *         name: id_bougie
 *         required: true
 *         schema:
 *           type: integer
 *           description: id de la bougie a supprimer
 *     responses:
 *       200:
 *         description: bougie supprimer avec succes
 *       500:
 *         description: Internal error
 */

router.delete("/deleteBougie", cadeauController.deleteBougie);

/**
 * @swagger
 * /cadeau/updateBougie:
 *   patch:
 *     tags: [Cadeau]
 *     summary: modifier une bougie
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_bougie
 *               - nom_bougie
 *               - prix_bougie
 *             properties:
 *               id_bougie:
 *                 type: integer
 *               nom_bougie:
 *                 type: string
 *               prix_bougie:
 *                 type: number
 *     responses:
 *       200:
 *         description: bougie modifier avec succes
 *       500:
 *         description: Internal error
 */

router.patch("/updateBougie", cadeauController.updateBougie);

/**
 * @swagger
 * /cadeau/getAllThe:
 *   get:
 *     tags: [Cadeau]
 *     summary: Get all the
 *     responses:
 *       200:
 *         description: Liste des thes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/The'
 *       500:
 *         description: Internal error
 */

router.get("/getAllThe", cadeauController.getAllThe);

/**
 * @swagger
 * /cadeau/createThe:
 *   post:
 *     tags: [Cadeau]
 *     summary: creer un nouveau the
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom_the
 *               - prix_the
 *             properties:
 *               nom_the:
 *                 type: string
 *               prix_the:
 *                 type: number
 *     responses:
 *       200:
 *         description: bougie creer avec succes
 *       500:
 *         description: Internal error
 */

router.post("/createThe", cadeauController.createThe);

/**
 * @swagger
 * /cadeau/deleteThe:
 *   delete:
 *     tags: [Cadeau]
 *     summary: supprime un the
 *     parameters:
 *       - in: query
 *         name: id_the
 *         required: true
 *         schema:
 *           type: integer
 *           description: id du the a supprimer
 *     responses:
 *       200:
 *         description: the supprimer avec succes
 *       500:
 *         description: Internal error
 */

router.delete("/deleteThe", cadeauController.deleteThe);

/**
 * @swagger
 * /cadeau/updateThe:
 *   patch:
 *     tags: [Cadeau]
 *     summary: modifier un the
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_the
 *               - nom_the
 *               - prix_the
 *             properties:
 *               id_the:
 *                 type: integer
 *               nom_the:
 *                 type: string
 *               prix_the:
 *                 type: number
 *     responses:
 *       200:
 *         description: the modifié avec succes
 *       500:
 *         description: Internal error
 */

router.patch("/updateThe", cadeauController.updateThe);

/**
 * @swagger
 * /cadeau/getAllFormule:
 *   get:
 *     tags: [Cadeau]
 *     summary: Get all formule
 *     responses:
 *       200:
 *         description: Liste des formule
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formule'
 *       500:
 *         description: Internal error
 */
router.get("/getAllFormule", cadeauController.getAllFormule);

/**
 * @swagger
 * /cadeau/createFormule:
 *   post:
 *     tags: [Cadeau]
 *     summary: creer une nouvelle formule
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom_formule
 *               - prix_formule
 *             properties:
 *               nom_formule:
 *                 type: string
 *               prix_formule:
 *                 type: number
 *               id_bouquet:
 *                 type: integer
 *                 example: 1
 *               id_bougie:
 *                 type: integer
 *                 example: 1
 *               id_the:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: formule creer avec succes
 *       500:
 *         description: Internal error
 */
router.post("/createFormule",cadeauController.createFormule);

/**
 * @swagger
 * /cadeau/deleteFormule:
 *   delete:
 *     tags: [Cadeau]
 *     summary: supprime une formule
 *     parameters:
 *       - in: query
 *         name: id_formule
 *         required: true
 *         schema:
 *           type: integer
 *           description: id de la formule a supprimer
 *     responses:
 *       200:
 *         description: the supprimer avec succes
 *       500:
 *         description: Internal error
 */

router.delete("/deleteFormule", cadeauController.deleteFormule);

/**
 * @swagger
 * /cadeau/updateFormule:
 *   patch:
 *     tags: [Cadeau]
 *     summary: modifier une formule
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_formule
 *               - nom_formule
 *               - prix_formule
 *             properties:
 *               id_formule:
 *                 type: integer
 *               nom_formule:
 *                 type: string
 *               prix_formule:
 *                 type: number
 *               id_bouquet:
 *                 type: integer
 *               id_bougie:
 *                 type: integer
 *               id_the:
 *                 type: integer
 *     responses:
 *       200:
 *         description: the modifié avec succes
 *       500:
 *         description: Internal error
 */
router.patch("/updateFormule", cadeauController.updateFormule)

module.exports = router;