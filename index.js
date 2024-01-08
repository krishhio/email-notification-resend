import { Resend } from 'resend';

const resend = new Resend('re_FUmiKeCD_LtKjEw8VhbuUTqqpRoXN7tnw');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'admin@crishio.com',
    to: ['cristian@macaocloud.com'],
    subject: 'Primera prueba de correo',
    html: '<strong>Parece que jala esta madre</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
