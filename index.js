import express from 'express'; 


const app = express(); 


app.get('/Empleados', (req, res) => res.send('Obteniendo empleados'));

app.post('/Empleados', (req, res) => res.send('Creando empleados'));

app.put('/Empleados', (req, res) => res.send('Actualizando empleados'));

app.delete('/Empleados', (req, res) => res.send('Eliminando empleados'));







app.listen(3000);
console.log('Server se esta ejecutando en el puerto 3000');