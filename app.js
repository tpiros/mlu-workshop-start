const express = require('express');
const appRoutes = require('./routes/app-routes');
const apiRoutes = require('./routes/api-routes');
const path = require('path');

const app = express();
const appRouter = express.Router();
const apiRouter = express.Router();

app.set('port', 3000);
app.set('json spaces', 2);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use('/api', apiRouter);
apiRouter.route('/').get(apiRoutes.displayWelcomeMessage);

app.use('/', appRouter);

app.listen(app.get('port'), () => console.info(`Magic happens on port ${app.get('port')}`));
