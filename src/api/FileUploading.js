export const Encode = async (data) => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL, {
        method: 'POST',
        body: data,
    });

    return res.json();
}