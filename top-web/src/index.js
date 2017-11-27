import dva from 'dva';
import createLoading from 'dva-loading';
import models from './models';
import './index.js';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
// 3. Model move to router
models.forEach((m) => {
    app.model(m);
  });

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');