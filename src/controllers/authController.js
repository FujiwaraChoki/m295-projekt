const logout = (req, res) => {
    try {
        const { email } = req.session;

        if (!email) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        req.session.email = null;

        return res.sendStatus(204);

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const verify = (req, res) => {
    try {
        const email = req.session.email;
        console.log(email);

        if (!email) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Authorized',
            email: email
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!isValidEmail(email)) {
            return res.status(406).json({
                success: false,
                message: 'Please provide a valid email'
            });
        }

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide an email and password'
            });
        }

        if (password !== 'm295') {
            return res.status(403).json({
                success: false,
                message: 'Invalid password'
            });
        }

        req.session.email = email;

        return res.status(200).json({
            success: true,
            email: email,
            message: 'Login successful'
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = {
    login,
    verify,
    logout,
};
