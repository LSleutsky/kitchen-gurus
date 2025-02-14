import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import nodemailer from 'nodemailer';

// Short-circuit the type-checking of the built output.
const BUILD_PATH = './build/server/index.js';
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PORT = Number.parseInt(process.env.PORT || '3000');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');

app.post('/api/submit-contact-form', (req, res) => {
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'lushsleutsky@gmail.com',
      pass: 'wnjo xuea hzvz tohn'
    }
  };

  console.log(`REQ BODY: `, req.body);

  const transporter = nodemailer.createTransport(config);

  const message = {
    from: `${req.body.firstName} ${req.body.lastName} ${req.body.email ? `<${req.body.email}>` : ``}`,
    to: 'lushsleutsky@gmail.com',
    subject: 'CONTACT FORM SUBMISSION',
    html: `
      <h3>First Name: </h3> ${req.body.firstName}
      ${req.body.spouseName ? `<h3>Spouse Name:</h3> ${req.body.spouseName}` : ``}
      <h3>Last Name: </h3> ${req.body.lastName}
      <h3>Phone Number: </h3> ${req.body.phoneNumber}
      ${req?.body?.email ? `<h3>Email:</h3> ${req.body.email}` : ``}
      ${req.body.serviceOptions ? `<h3>Services:</h3> ${req.body.serviceOptions.join(', ')}` : ``}
      ${req.body.comments ? `<h3>Comments:</h3> ${req.body.comments}` : ``}
    `
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: 'Email sent',
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
      });
    })
    .catch((error) => {
      return res.status(500).json({ msg: error });
    });
});

if (DEVELOPMENT) {
  console.log('Starting development server');

  const viteDevServer = await import('vite').then((vite) =>
    vite.createServer({
      server: { middlewareMode: true }
    })
  );

  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule('./server/app.ts');

      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === 'object' && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }

      next(error);
    }
  });
} else {
  console.log('Starting production server');

  app.use('/assets', express.static('build/client/assets', { immutable: true, maxAge: '1y' }));
  app.use(express.static('build/client', { maxAge: '1h' }));
  app.use(await import(BUILD_PATH).then((mod) => mod.app));
}

app.use(morgan('tiny'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
