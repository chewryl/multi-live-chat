import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const login = async (email, password) => {
	// reset the error value as it could already be populated from the users previous sign in attempt
	error.value = null

	try {
		const response = await projectAuth.signInWithEmailAndPassword(email, password)
		if (!response) {
			throw new Error('Could not log in')
		}
		error.value = null
		return response

	} catch (err) {
		console.log(err.message)
		error.value = 'Incorrect login credentials'
	}
}

const useLogin = () => {
	return { login, error}
}

export default useLogin