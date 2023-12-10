import express from "express";
import { check } from "express-validator";


const validateUser = [
    // Username Validation
    check('username')
        .isLength({ min: 1, max: 30 }).trim()
        .withMessage('Username cannnot be empty.')
        .matches(/^[a-zA-Z0-9_]+$/, 'i').withMessage('Username must be alphanumeric, and can contain underscores.'),


    // Email Validation
    check('email')
        .isEmail().withMessage("Must be a valid email address!")
        .isLength({ min: 4, max: 30 })
        .withMessage("Email address characters must be between 4-30!")
        .trim()
        .escape()
        .normalizeEmail(),

    // Password Validation
    check('password')
        .isLength({ min: 8, max: 100 })
        .withMessage('Password must be between 8-100 characters long!')
        .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
                throw new Error("Password did not match!");
            } else {
                return value;
            }
        }),

];


