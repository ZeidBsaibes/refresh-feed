// pages/api/[id].js
export default function handler(req, res) {
    const { id } = req.query;
  
    switch (req.method) {
      case 'GET':
console.log('user id is': id)
        break;
      case 'POST':
        // Handle POST request
        break;
      // add other methods as needed
      default:
        res.setHeader('Allow', ['GET', 'POST']) // Example allowed methods
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  }
  