const Users = require("./users-model")
const bcrypt = require("bcryptjs")
function restrict() {
	// This middleware function should restrict routes to authorized users only.
	// It should get the username and password from the request headers.
	return async (req, res, next) => {
		const authError = {
			message: "invalide credentials"
		}
		 try {
		// 	const { username, password } = req.headers
		// 	//make sure the values arent empty
		// 	if(!username || !password) {
		// 		return res.status(401).json(authError)
		// 	}

		// 	//make sure the user exists in the database
		// 	const user = await Users.findBy({username}).first()
		// 	if(!user) {
		// 		return res.status(401).json(authError)
		// 	}

		// 	//check that password is valide
		// 	const passwordValide = await bcrypt.compare(password, user.password)
		// 	if(!passwordValide) {
		// 		return res.status(401).json(authError)
		// 	}
//no more having a lot of validation to make we just have to verify the sessions exsits
			if(!req.session || !req.session.user){
				return res.status(401).json(authError)
			}
			//we're authorized by this point so call:
			next()
		} catch (err) {
			next(err)
		}
	}
}

module.exports = {
	restrict,
}