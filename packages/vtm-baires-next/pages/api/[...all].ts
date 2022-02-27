import {NextApiRequest, NextApiResponse} from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        externalResolver: true,
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => (
    process.env.NODE_ENV === "development"
        ? httpProxyMiddleware(req, res, {
            target: "http://localhost:4000"
        })
        : res.status(404).send(null)
);
