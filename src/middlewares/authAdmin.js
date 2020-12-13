module.exports = async (req, res, next) => {
  try {
    if (req.isAdmin) {
      return next();
    }
    else {
        return res.status(403).send({error: "Not Permission"});
    }
  } catch (err) {
    return res.status(401).json({ error: "Token invalid" });
  }
};
