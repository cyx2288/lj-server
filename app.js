'use strict';

module.exports = app => {
  // 自定义内容
  app.projectName = 'egg-example';

  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    if (app.config.env === 'local') {
      await app.model.sync(
        //{ force: true }
        );
    }
    console.log('==app beforeStart==');
  });

  app.ready(async () => {
    console.log('==app ready==');
  });

  app.beforeClose(async () => {
    console.log('==app beforeClose==');
  });
};

