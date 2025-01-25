const jwt = require('jsonwebtoken');

// Middleware to ensure the user is authenticated using a JWT token
const ensureAuthenticated = (req, res, next) => {
    // Get the 'Authorization' header from the request
    const auth = req.headers['authorization'];

    // Check if the token is missing
    if (!auth) {
        return res.status(403) // Forbidden
            .json({ message: 'Unauthorized, JWT token is required' });
    }

    try {
        // Verify the JWT token using the secret key from environment variables
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);

        // Attach the decoded user data to the request object for further use
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // Handle invalid or expired token
        return res.status(403) // Forbidden
            .json({ message: 'Unauthorized, JWT token is wrong or expired' });
    }
}

// Export the middleware for use in routes
module.exports = ensureAuthenticated;
