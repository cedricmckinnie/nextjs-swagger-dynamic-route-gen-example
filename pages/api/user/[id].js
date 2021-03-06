/**
 * @swagger
 * /api/user/:id
 *   get:
 *     description: get user by id
 *     parameters:
 *       - name: id
 *         description: User id.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: get user by id
 */
export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` });
      break;
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
