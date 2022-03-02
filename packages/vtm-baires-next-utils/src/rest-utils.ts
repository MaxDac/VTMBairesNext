export const post = <TResponse>(url: string, body: any): Promise<TResponse> =>
    new Promise<TResponse>((res, rej) => {
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(r => {
                console.debug("response headers", r.headers)

                if (!r.ok || r.status !== 200) {
                    r.json().then(j => rej(j));
                }
                else {
                    r.json().then(j => res(j));
                }
            })
            .catch(err => {
                rej(err);
            })
    });
