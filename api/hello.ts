import { VercelRequest, VercelResponse } from '@vercel/functions';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: "Working from Vercel!" });
}
