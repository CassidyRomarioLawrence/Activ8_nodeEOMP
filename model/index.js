const dB = require('../config/index');
const { hash, compare, hashSync } = require('bcrypt');

const { createToken } = require('../middleware/AuthenticateUser');

class User{
    login(req, res) {
        const { email, userPass } = req.body;
        const querySt =
            `
            SELECT firstName,lastName,phoneNumber,email,gender,userRole,userImage
            FROM users
            WHERE email = '${email}';
            `;
        dB.query(querySt, async (err, data) => {
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({ message: "Incorrect email address" });
            } else {
                await compare(userPass, data[0].userPass, (eErr, eResult) => {
                    if (eErr) throw eErr;
                    const jToken = createToken({
                        email, userPass
                    }
                    );
                    res.cookie('LegitUser',jToken,{

                        maxAge: 3600000,
                        httpOnly:true
                    })
                    if (eResult) {
                        res.status(200).json({
                            message: 'Logged In',
                            jToken,
                            result:data[0]
                        })
                    } else {
                        res.status(401).json({
                            errMsg: 'Invalid password.'
                        })
                    }
                })
            }
        })
    }
    fetchUsers(req, res){
    const querySt =
        `
        SELECT userId, firstName, lastName, gender, phoneNumber, email, userRole,userImage
        FROM users;
        `;
    
    dB.query(querySt, (err, data) => {
        if (err) throw err;
        else res.status(200).json({
            results: data
        });
    })
    }
    fetchUser(req,res){
        const querySt =
            `
            SELECT userId, firstName, lastName, gender, phoneNumber, email, userRole,userImage
            FROM users
            WHERE userId = ?;
            `;
        dB.query(querySt, [req.params.userId],
            (err, data) => {
                if (err) throw err;
                else res.status(200).json({
                    results: data
                }
                );
        })
    }
    async createUser(req, res) {
        let info = req.body;
        info.userPass = await
            hash(info.userPass, 20);
        
        let user = {
            email: info.email,
            userPass: info.userPass
        }

        const querySt =
            `
            INSERT INTO users SET?;
            `;
        dB.query(querySt, [info], (err) => {
            if (err) {
                res.status(401).json({ err });
            } else {
                const jToken = createToken(user);
                res.cookie('LegitUser', jToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({message: "User record saved"})
            }
        })
    }
    updateUser(req, res) {
        let data = req.body;
        if (data.userPass !== null ||
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const querySt =
            `
            UPDATE users SET ?
            WHERE userId = ?;
            `;
        dB.query(querySt, [data, req.params.userId],
            (err) => {
                if (err) throw err;
                res.status(200).json({ message: "Row has been updated" });
        })
    }
    deleteUser(req, res) {
        const querySt =
            `
            DELETE FROM users
            WHERE userId = ?;
            `;
        dB.query(querySt, [req.params.userId],
            (err) => {
                if (err) throw err;
                res.status(200).json({ message: "Users been deleted from database" });
        })
    }
}

class Product{
    fetchProducts(req, res) {
        const querySt =
            `
            SELECT id,category,prodName,prodInfo,prodPrice,prodImage
            FROM products;
            `;
        dB.query(querySt, (err, results) => {
            if (err) throw err;
            res.status(200).json({ results: results })
        });
    }
    fetchProduct(req, res) {
        const querySt =
            `
            SELECT id,category,prodName,prodInfo,prodPrice,prodImage
            FROM products
            WHERE id = ?;
            `;
        dB.query(querySt, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({ results: results })
        });
    }
    addProduct(req, res) {
        const querySt =
            `
            INSERT INTO products
            SET ?;
            `;
        dB.query(querySt, [req.body], (err) => {
            if (err) {
                res.status(400).json({ error: "Unable to add new product." });
            } else {
                res.status(200).json({ message: "Successfully added product." });
            }
        });
    }
    updateProduct(req, res) {
        const querySt =
            `
            UPDATE products
            SET ?
            WHERE id = ?;
            `;
        dB.query(querySt, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({ error: "Unable to update product details." });
            } else {
                res.status(200).json({ message: "Successfully updated" });
            }
        })
    }
    deleteProduct(req, res) {
        const querySt =
            `
            DELETE FROM products
            WHERE id = ?;
            `;
        dB.query(querySt, [req.params.id], (err) => {
            if (err)
                res.status(400).json({ error: "Record not found." });
            res.status(200).json({message:"Successfully deleted product."})
        })
    }
}

module.exports = {User,Product}