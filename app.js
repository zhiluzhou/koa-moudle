const Koa = require('koa')
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa()
// 导入controller middleware:
const controller = require('./controller');
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
// parse request body:
app.use(bodyParser());

// 使用middleware:
app.use(controller());

app.listen(3000,()=>{
    console.log("server is running at 3000 port");
  })