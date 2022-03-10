import app from './app'

const startServer = () => {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`)
    });
}

export {
    startServer
}
