const displayWelcomeMessage = ((req, res) => {
  res.json({ data: 'Hello world :)'});
});

module.exports = {
  displayWelcomeMessage
};
