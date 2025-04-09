const API_URL = 'https://crudcrud.com/api/26c73534090f49b58fdcf5bf5345fa1a/unicorns';

export const getAllUnicorn = async () => {
    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
        throw new Error('Error fetching unicorns');
    }

    const data = await response.json();
    return data;
}

export const createUnicorn = async (unicorn) => {
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(unicorn)
    });

    if (!response.ok) {
        throw new Error('Error creating unicorn');
    }

    const data = await response.json();
    return data;
}

export const updateUnicorn = async (id, unicorn) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(unicorn)
    });

    if(!response.ok) {
        throw new Error('Error updating unicorn');
    }

    const data = await response.json();
    return data;
}

export const deleteUnicorn = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Error deleting unicorn');
    }
    return response.ok;
}