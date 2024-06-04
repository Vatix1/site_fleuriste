const express = require('express');
let router = express.Router();
const evenementController = require('../controllers/evenement.controller')

router.use((req, res, next) => {
    console.log(`Requête reçue sur le routeur : ${req.originalUrl}`);
    next();
});

/**
 * @swagger
 * tags:
 *   name: Evenement
 *   description: Evenement API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Evenement:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: "Mariage"
 */

/**
 * @swagger
 * /evenement/getAllEvenement:
 *   get:
 *     tags: [Evenement]
 *     summary: Get all evenement
 *     responses:
 *       200:
 *         description: Liste des evenements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evenement'
 *       500:
 *         description: Internal error
 */

router.get("/getAllEvenement", evenementController.getAllEvenement);

/**
 * @swagger
 * /evenement/createEvenement:
 *   post:
 *     tags: [Evenement]
 *     summary: creer un nouveau evenement
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom_evenement
 *             properties:
 *               nom_evenement:
 *                 type: string
 *     responses:
 *       200:
 *         description: evenement creer avec succes
 *       500:
 *         description: Internal error
 */

router.post("/createEvenement", evenementController.createEvenement);

/**
 * @swagger
 * /evenement/deleteEvenement:
 *   delete:
 *     tags: [Evenement]
 *     summary: supprime un evenement
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: id de l'evenement a supprimer
 *     responses:
 *       200:
 *         description: evenement supprimer avec succes
 *       500:
 *         description: Internal error
 */
router.delete("/deleteEvenement", evenementController.deleteEvenement);

/**
 * @swagger
 * /evenement/updateEvenement:
 *   post:
 *     tags: [Evenement]
 *     summary: modifier un evenement
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_evenement
 *               - nom_evenement
 *             properties:
 *               id_evenement:
 *                 type: integer
 *               nom_evenement:
 *                 type: string
 *     responses:
 *       200:
 *         description: evenement modifier avec succes
 *       500:
 *         description: Internal error
 */
router.patch("/updateEvenement", evenementController.updateEvenement);

module.exports = router;