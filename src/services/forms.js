const baseUrl = 'http://localhost:3000';

export const feedback = async ({name, email}) => {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({fullName: name, email: email})
    };
    const response = await fetch(`${baseUrl}/posts`, init);
    return response.json();
};