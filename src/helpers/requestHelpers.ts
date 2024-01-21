export const request = {
    GET: async(url: string) => {
        const response = await fetch(url);

        if (!response.ok) return;

        return response.json();
    },
    POST: async(url: string, payload: string, setHandler: Function, setHandlerAdditional: Function) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ payload }),
        });

        if (!response.ok || !response.body) return;

        let chatResponse = "";

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        setHandlerAdditional(false)

        while(true) {
            const { value, done } = await reader.read();
            const text = decoder.decode(value);

            setHandler((prev: string) => prev + text);

            if (done) {
                setHandlerAdditional(true)
                break;
            }
        }

        return { chatResponse };
    },
};