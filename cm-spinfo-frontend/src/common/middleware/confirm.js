const confirmMiddleware = store => next => action => {
  if (!action.meta || !action.meta.confirm) {
    return next(action);
  }

  if (window.confirm(action.meta.confirm)) {
    delete action['meta']['confirm'];
    return next(action);
  }
};

export default confirmMiddleware;