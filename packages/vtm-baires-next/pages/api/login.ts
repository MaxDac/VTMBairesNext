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
            patternStr: "^/api/login",
            replaceStr: "/login"
        }],
        onProxyInit: httpProxy => {
            httpProxy.on("proxyRes", (_req, res, target) => {
                const cookies: [string, string][] = res.headers.cookie
                    ?.split(" ")
                    ?.map(x => x.replace(";", "").split("=") as [string, string]) ?? [];

                for (let [key, value] of cookies) {
                    console.debug(key, value);
                }
            })
        }
    })
