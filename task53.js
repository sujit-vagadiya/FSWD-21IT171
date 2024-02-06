const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;
// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    // Generate a unique file name by adding a timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});
// Create multer instance with the storage configuration
const upload = multer({ storage: storage });
// Set up a route to serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>File Upload Example</h1>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="file">
          <button type="submit">Upload</button>
        </form>
      </body>
    </html>
  `);
});
// Set up the route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});