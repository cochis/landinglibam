require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./database/config')
const path = require('path')
const https = require('https')
const fs = require('fs')
const { Resend } = require('resend');
// Crear el servidor de express
const app = express()

// Configurar CORS
app.use(cors())
//Carpeta publoc

app.use('/', express.static('client', { redirect: false }))

app.use(express.static('public'))

//lectura y paseo del body
app.use(express.json())
// Base de datos
dbConnection()

// Rutas

/* app.use('/api/usuarios', require('./routes/usuarios'))
const resend = new Resend('re_4DM36nWr_GjeWbmV6cD6DpDf5FT8xuLGF');
app.post('/api/enviar-correo', async (req, res) => {
  try {
    const { nombre, telefono, correo } = req.body;

    if (!nombre || !telefono || !correo) {
      return res.status(400).json({ error: 'Faltan datos en el formulario.' });
    }

    // --- INICIO DE LA ACTUALIZACIÓN ---

    // 1. Define un Título de Asunto claro
    const subject = `Solicitud de Información Web - ${nombre}`;

    // 2. Define el cuerpo del correo en HTML profesional
    // (Puedes cambiar el color '#004d41' por el color principal del colegio)
    const htmlBody = `
      <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        
        <div style="background-color: #004d41; color: #ffffff; padding: 25px 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Colegio Libertadores de America</h1>
          <p style="margin: 5px 0 0; font-size: 16px;">Nueva Solicitud de Información</p>
        </div>
        
        <div style="padding: 30px 35px;">
          <h2 style="font-size: 20px; color: #004d41; margin-top: 0;">¡Nueva Oportunidad!</h2>
          <p>Se ha recibido una nueva solicitud de contacto a través del formulario del sitio web. Se recomienda dar seguimiento a la brevedad.</p>
          
          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 25px; font-size: 18px;">Datos del Interesado</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 180px;">Nombre del Padre/Madre:</td>
              <td style="padding: 12px 0;">${nombre}</td>
            </tr>
            
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Teléfono de Contacto:</td>
              <td style="padding: 12px 0;">
                <a href="tel:${telefono}" style="color: #004d41; text-decoration: none;">${telefono}</a>
              </td>
            </tr>
            
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Correo Electrónico:</td>
              <td style="padding: 12px 0;">
                <a href="mailto:${correo}" style="color: #004d41; text-decoration: none;">${correo}</a>
              </td>
            </tr>
            
          </table>
        </div>
        
        <div style="background-color: #f9f9f9; color: #888; padding: 20px 30px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">Este es un mensaje automático generado por el sitio web <br>colegiolibam.com</p>
        </div>
        
      </div>
    `;

    // 3. Enviar el correo usando Resend con el nuevo formato
    const { data, error } = await resend.emails.send({
      // El nombre "Formulario Web" aparecerá como el remitente
      from: 'Formulario Web <onboarding@resend.dev>',
      to: ['contacto@colegiolibam.com'], // El correo de la administración
      subject: subject,           // Asunto actualizado
      html: htmlBody,             // Cuerpo HTML actualizado
    });

    // --- FIN DE LA ACTUALIZACIÓN ---

    if (error) {
      console.error('Error de Resend:', error);
      return res.status(500).json({ error: 'Error al enviar el correo.' });
    }

    console.log('Correo enviado:', data);
    res.status(200).json({ message: 'Correo enviado con éxito.' });

  } catch (error) {
    console.error('Error del servidor:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}); */

app.get('*', function (req, res, next) {
  res.sendFile(path.resolve('client/index.html'))
})
app.listen(process.env.PORT, () => {
  console.log(
    '__________________________________________________________________________________________________',
  )
  console.log(
    '__________________________________________________________________________________________________',
  )
  console.log('Servidor corriendo en puerto ' + process.env.PORT)
})
