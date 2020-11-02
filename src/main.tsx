import React, { Fragment } from 'react';
import './index.css';
import { ReactApplication } from '@typeclient/react';
import { bootstrp, usePopStateHistoryMode } from '@typeclient/core';
import { CustomController } from './custom/custom.controller';

usePopStateHistoryMode()

const app = new ReactApplication({
  el: document.getElementById('root'),
  prefix: '/',
  maxParamLength: Infinity,
  ignoreTrailingSlash: true,
  caseSensitive: true,
});

app.setController(CustomController);

app.onError((err, ctx?) => {
  return <Fragment>
    <h1>TypeClient Catch Error:</h1>
    { ctx ? <p>Path: {ctx.req.pathname}</p> : null }
    <p><strong>Message</strong></p>
    <pre>{err.stack}</pre>
  </Fragment>
});

app.onNotFound(req => {
  return <Fragment>
    <h1>Sorry, Page not found:</h1>
    <p>Path: {req.pathname}</p>
  </Fragment>
});

bootstrp();