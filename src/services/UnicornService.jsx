const API_URL = 'https://crudcrud.com/api/0644bcf4f44043399a1495baa375ea98/unicorns';

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