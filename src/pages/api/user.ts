import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from "@/types/User"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const user: User = {
    name: 'Eshmijz',
    email: "example@hoge.com",
    lastSignInDate: Date.now().toLocaleString()
  }
  res.status(200).json(user)
}