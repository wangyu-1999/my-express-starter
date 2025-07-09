import app from './app';
import PORT from './utils/config.js';

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
