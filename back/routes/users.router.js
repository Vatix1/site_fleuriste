const express = require('express');
let router = express.Router();
const userController = require('../controllers/users.controller')

router.use((req, res, next) => {
    console.log(`Requête reçue sur le routeur : ${req.originalUrl}`);
    next();
  });
/**
 * @swagger
 * tags:
 *   name: Utilisateur
 *   description: Utilisateur API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Utilisateur:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: "Big Red"
 *         mot_de_passe:
 *           type: string
 *         email:
 *           type: string
 *         id_role:
 *           type: integer
 *     Roles:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1 
 *         nom:
 *           type: string
 *           example: "Admin" 
 */

/**
 * @swagger
 * /user/getAllUsers:
 *   get:
 *     tags: [Utilisateur]
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Utilisateur'
 *       500:
 *         description: Internal error
 */

router.get("/getAllUsers", userController.getAllUsers);

/**
 * @swagger
 * /user/getAllRoles:
 *   get:
 *     tags: [Utilisateur]
 *     summary: Get all roles
 *     responses:
 *       200:
 *         description: Liste des roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Roles'
 *       500:
 *         description: Internal error
 */

router.get("/getAllRoles", userController.getAllRoles);

/**
 * @swagger
 * /user/updateUtilisateur:
 *   patch:
 *     tags: [Utilisateur]
 *     summary: modifier un utilisateur
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_utilisateur
 *               - id_role
 *             properties:
 *               id_utilisateur:
 *                 type: integer
 *               id_role:
 *                 type: integer
 *     responses:
 *       200:
 *         description: utilisateur modifier avec succes
 *       500:
 *         description: Internal error
 */

router.patch("/updateUtilisateur", userController.updateUtilisateur);

/**
 * @swagger
 * /user/deleteUtilisateur:
 *   delete:
 *     tags: [Utilisateur]
 *     summary: supprime un utilisateur
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: id de l'utilisateur a supprimer
 *     responses:
 *       200:
 *         description: utilisateur supprimer avec succes
 *       500:
 *         description: Internal error
 */
router.delete("/deleteUtilisateur", userController.deleteUtilisateur);

/**
 * @swagger
 * /user/createUtilisateur:
 *   post:
 *     tags: [Utilisateur]
 *     summary: creer un nouveau utilisateur
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom_utilisateur
 *               - mot_de_passe
 *             properties:
 *               nom_utilisateur:
 *                 type: string
 *               mot_de_passe:
 *                 type: string 
 *     responses:
 *       200:
 *         description: utilisateur creer avec succes
 *       500:
 *         description: Internal error
 */
router.post("/createUtilisateur", userController.createUtilisateur);
/*
router.post(
    "/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ],
    authController.signup
);
*/

router.post("/signin", userController.signin);


module.exports = router;