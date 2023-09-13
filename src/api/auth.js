export default function handler(req, res) {
    if (req.method === 'POST') {
      const { password } = req.body;
  
      // Check username and password here (e.g., by comparing with stored credentials)
      if (password === '123456789') {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    } else {
      res.status(405).end();
    }
  }