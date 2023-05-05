const url = 'http://localhost:3000/tasks';

const getTasks = async () => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    console.log(data);
};

const addTask = async (task) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const data = await response.json();

    console.log(data);
};

const deleteTask = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    console.log(data);
};

const login = async (email, password) => {
    const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data);
};

const verify = async () => {
    const response = await fetch('http://localhost:5001/verify', {
        method: 'GET',
        headers: {
            'Credentials': 'include'
        }
    });
    const data = response.status;

    console.log(data);
};

// getTasks();
/*addTask({
    title: 'Test',
    description: 'This is a test task',
    due_date: '2023-10-10'
});*/

// deleteTask('61de6d4f-2f68-9ka2-a534-9271f5b5d27b');

login('sami@samihindi.com', 'm295').then(() => {
    verify();
});
