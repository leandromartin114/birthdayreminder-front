export const BASE_URL = 'https://birthdayreminder-api.vercel.app/api'

// Main API Fetch. Parameters: options and the specific endpoint.
export async function fetchAPI(input, options) {
    const url = BASE_URL + input
    const newOptions = options || {}
    newOptions.headers ||= {}
    // Getting the token if it was saved before
    const token = getSavedToken()
    if (token) {
        newOptions.headers.Authorization = `Bearer ${token}`
    }
    newOptions.headers['Content-type'] = 'application/json'
    if (newOptions.body) {
        newOptions.body = JSON.stringify(newOptions.body)
    }

    const res = await fetch(url, newOptions)
    if (res.status >= 200 && res.status < 300) {
        const data = await res.json()
        return { data, status: res.status }
    } else {
        const json = await res.json()
        throw new Error(json)
    }
}

// It sends the code when the user signup for the first time
export async function sendCodeSignUp(fullName, email) {
    try {
        const data = await fetchAPI('/auth/signup', {
            method: 'POST',
            body: {
                email,
                fullName,
            },
        })
        return data
    } catch (error) {
        return error
    }
}

// It sends the code when the user login
export async function sendCodeLogin(email) {
    try {
        const data = await fetchAPI('/auth/login', {
            method: 'POST',
            body: { email },
        })
        return data
    } catch (error) {
        return error
    }
}

// Check the email and code for login the user and get the token
export async function getToken(email, code) {
    const res = await fetchAPI('/auth/token', {
        method: 'POST',
        body: {
            email,
            code,
        },
    })
    // We save the token in the data obj
    const token = res.data.token
    saveToken(token)
    return token
}

// Saving the token in localStorage
export function saveToken(token) {
    sessionStorage.setItem('auth_token', token)
}

// Getting the token saved before from localStorage
export function getSavedToken() {
    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('auth_token')
        return token
    }
    return false
}

// Deleting the token from localStorage
export function removeToken() {
    sessionStorage.removeItem('auth_token')
}

// It gets the user profile data
export async function getMe() {
    const token = getSavedToken()
    if (token) {
        try {
            const res = await fetch(BASE_URL + '/user/profile', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `bearer ${token}`,
                },
            })
            const data = await res.json()
            return data
        } catch (error) {
            return error
        }
    }
}

// It updates the user profile data
export async function updateMe(fullName, email) {
    const token = getSavedToken()
    if (token) {
        try {
            const data = await fetchAPI('/user/update', {
                method: 'PATCH',
                body: {
                    fullName,
                    email,
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            })
            return data
        } catch (error) {
            return error
        }
    }
}

// It gets the user birthdays
export async function getSavedBirthdays() {
    const token = getSavedToken()
    if (token) {
        try {
            const res = await fetch(BASE_URL + '/user/birthdays', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `bearer ${token}`,
                },
            })
            const data = await res.json()
            return data
        } catch (error) {
            return error
        }
    }
}

// It deletes a birthday
export async function deleteBirthday(date, fullName) {
    const token = getSavedToken()
    if (token) {
        try {
            const data = await fetchAPI(
                `birthday/delete?date=${date}&fullName=${fullName}`,
                {
                    method: 'DELETE',
                    body: {
                        date,
                        fullName,
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            )
            return data
        } catch (error) {
            return error
        }
    }
}

// It creates a new birthday
export async function createBirthday(date, fullName) {
    const token = getSavedToken()
    if (token) {
        try {
            const data = await fetchAPI('/birthday/new', {
                method: 'POST',
                body: {
                    date,
                    fullName,
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            })
            return data
        } catch (error) {
            return error
        }
    }
}
