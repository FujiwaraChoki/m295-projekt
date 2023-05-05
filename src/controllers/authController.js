const { generateRandomId } = require('../utils');

const logout = (req, res) => {
    try {
        const { sessionID } = req.session;

        if (!sessionID) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        req.session.sessionID = null;

        return res.sendStatus(204);

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

const verify = (req, res) => {
    try {
        const sessionID = req.session.sessionID;
        console.log(sessionID);

        if (!sessionID) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Authorized',
            session_id: sessionID
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide an email and password'
            });
        }

        if (password !== 'm295') {
            return res.status(401).json({
                success: false,
                message: 'Invalid password'
            });
        }

        const sessionID = generateRandomId();

        req.session.sessionID = sessionID;

        return res.status(200).json({
            success: true,
            session_id: sessionID,
            message: 'Login successful'
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

module.exports = {
    login,
    verify,
    logout,
}