import {NextApiRequest, NextApiResponse} from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        externalResolver: true,
    }
}

export default (req: NextApiRequest, res: NextApiResponse) =>
    httpProxyMiddleware(req, res, {
        target: "http://localhost:4000",
        pathRewrite: [{
            patternStr: "^/api/check",
            replaceStr: "/check"
        }]
    })
