const path = require("path");

const fastify = require("fastify");
const view = require("@fastify/view");
const static = require("@fastify/static");

const app = fastify();

app.register(static, {
    root: path.join(__dirname),
    prefix: '/',
});

app.register(view, {
    engine: {
        ejs: require("ejs"),
    },
    root: path.join(__dirname, "public"),
});


app.get("/", async (_, reply) => {
    return reply.redirect("/index.html");
});

app.get("/news", async (_, reply) => {
    return reply.redirect("/news/index.html");
});

app.listen({ port: 3000 });
