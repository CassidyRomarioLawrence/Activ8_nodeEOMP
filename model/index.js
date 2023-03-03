const dB = require('../config');

const {hash, compare, hashSync } = require('bcrypt');

const { createToken } = require('../middleware/AuthenticateUser');

class User {
    login(req, res) {
        const {email, userPass} = req.body;
        const querySt = 
        `
        SELECT firstName, lastName, gender, email, userPass, userRole, userImage, DATE_FORMAT(joinDate, '%d-%m-%Y') AS user_joined
        FROM users
        WHERE email = '${email}';
        `;
        dB.query(querySt, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "Incorrect email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (uErr, uResult)=> {
                        if(uErr) throw uErr;
                        const jToken = 
                        createToken(
                            {
                                email, userPass  
                            }
                        );
                        res.cookie('Valid User',
                        jToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(uResult) {
                            res.status(200).json({
                                msg: 'Logged In',
                                jToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'Incorrect password'
                            })
                        }
                    })
            }
        })     
    }
    fetchUsers(req, res) {
        const querySt = 
        `
        SELECT userId, firstName, lastName, gender, phoneNumber, email, userRole, userImage, DATE_FORMAT(joinDate, '%d-%m-%Y') AS user_joined
        FROM users;
        `;
        
        dB.query(querySt, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const querySt = 
        `
        SELECT userId, firstName, lastName, gender, phoneNumber, email, userRole, userImage, DATE_FORMAT(joinDate, '%d-%m-%Y') AS user_joined
        FROM users
        WHERE userId = ?;
        `;
        
        dB.query(querySt,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async createUser(req, res) {
        let info = req.body;
        info.userPass = await 
        hash(info.userPass, 15);
        let user = {
            email: info.email,
            userPass: info.userPass
        }
        
        const querySt =
        `INSERT INTO users
        SET ?;`;
        dB.query(querySt, [info], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                
                const jToken = createToken(user);
                res.cookie("Valid User", jToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "Successfully added new user."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const querySt = 
        `
        UPDATE users
        SET ?
        WHERE userId = ?;
        `;
        
        dB.query(querySt,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "User successfully updated."} );
        })    
    }
    deleteUser(req, res) {
        const querySt = 
        `
        DELETE FROM users
        WHERE userId = ?;
        `;
        
        dB.query(querySt,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "User was successfully deleted."} );
        })    
    }
}

class Product {
    fetchProducts(req, res) {
        const querySt = `SELECT id, category, prodName, prodInfo, prodPrice, prodQuantity, prodImage
        FROM products;`;
        dB.query(querySt, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const querySt = `SELECT id,category, prodName, prodInfo, prodPrice, prodQuantity, prodImage
        FROM products
        WHERE id = ?;`;
        dB.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO products
        SET ?;
        `;
        dB.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to create new product."});
                }else {
                    res.status(200).json({msg: "Successfully created new product."});
                }
            }
        );    

    }
    updateProduct(req, res) {
        const querySt = 
        `
        UPDATE products
        SET ?
        WHERE id = ?
        `;
        dB.query(querySt,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Could not update product."});
                }else {
                    res.status(200).json({msg: "Product successfully updated"});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const querySt = 
        `
        DELETE FROM products
        WHERE id = ?;
        `;
        dB.query(querySt,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "Unable to find product."});
            res.status(200).json({msg: "Successfully deleted product."});
        })
    }
}

module.exports = {
    User, 
    Product
}