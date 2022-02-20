// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const someFunction = <T>(arg: T): T => {
  return arg;
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
