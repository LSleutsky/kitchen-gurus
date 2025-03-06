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
  const { firstName, spouseName, lastName, phoneNumber, email, serviceOptions, comments } = req.body;

  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'kitchengurusllc@gmail.com',
      pass: 'ltjz gtva ugkd yfcr'
    }
  };

  const transporter = nodemailer.createTransport(config);

  const message = {
    from: email || 'kitchengurusllc@gmail.com',
    to: 'kitchengurusllc@gmail.com',
    subject: 'KITCHEN GURUS CONTACT FORM',
    html: `
      <h3>First Name: </h3> ${firstName}
      ${spouseName ? `<h3>Spouse Name:</h3> ${spouseName}` : ``}
      <h3>Last Name: </h3> ${lastName}
      <h3>Phone Number: </h3>
        ${
          // account for browser autofill value which sends phone number unformatted due to mui / react-hook-form validation logic
          phoneNumber.length === 10
            ? `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
            : `${phoneNumber}`
        }
      ${email ? `<h3>Email:</h3> ${email}` : ``}
      ${serviceOptions ? `<h3>Services:</h3> ${serviceOptions.join(', ')}` : ``}
      ${comments ? `<h3>Comments:</h3> ${comments}` : ``}
    `
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: 'Email sent successfully',
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
