import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import chalk from 'chalk';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(port, () => {
    console.log(
        chalk.black.bgHex('#41b883').bold(` express is running on ${port} `)
    );
});

mongoose
    .connect(
        'mongodb+srv://admin:1234@cluster0.f2q6e.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log(chalk.bold.bgCyan('mongoDB connection is success!'));
    })
    .catch((err) => {
        console.log(chalk.bold.bgRed(err));
    });

// app.use('/posts', posts);

app.post('/saveCat', (req, res) => {
    console.log(req.body);
    const Cat = mongoose.model('Cat', { name: 'string' });
    const kitty = new Cat({ name: req.body.catName });
    let isSuccess = false;
    kitty.save().then(() => {
        isSuccess = true;
        console.log(chalk.bgGreen.bold('save success'));
    });
    if (isSuccess === true) {
        res.status(200).json({ isSuccess: true });
        return;
    }

    res.send(false);
});

app.post('/saveUser', async (req, res) => {
    console.log(chalk.bgBlack.bold(req.body));
    const user = mongoose.model('user', {
        name: 'string',
        token: 'string',
        email: 'string',
    });
    const kitty = new user({
        name: req.body.name,
        email: req.body.email,
        token: req.body.token,
    });

    await kitty.save().then(() => {
        isSuccess = true;
        console.log(chalk.bgGreen.bold('save success'));
    });
    let isSuccess = false;
    if (isSuccess === true) {
        res.status(200).json({ isSuccess: true });
        return;
    }

    res.status(200).json({ isSuccess: false });
});

app.get('/', (req, res) => {
    res.send({ id: 1, name: 'stu1', age: 32 });
});

app.get('/login', (req, res) => {
    res.send('login');
});
