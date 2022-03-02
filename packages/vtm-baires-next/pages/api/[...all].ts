import {NextApiRequest, NextApiResponse} from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        externalResolver: true,
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) =>
    httpProxyMiddleware(req, res, {
        target: "http://localhost:4000",
        onProxyInit: httpProxy => {
            httpProxy.on("proxyReq", (req, _res, _target) => {
                console.debug("req", req)
            })
        }
    })

