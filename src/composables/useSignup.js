import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const signup = async (email, password, displayName) => {
	// reset the error value as it could already be populated from the users previous sign up attempt
	error.value = null

	try {
		const response = await projectAuth.createUserWithEmailAndPassword(email, password)
		if (!response) {
			throw new Error('Could not complete the sign up')
		}
		await response.user.updateProfile({ displayName })

		error.value = null
		return response

	} catch (err) {
		console.log(err.message)
		error.value = err.message
	}
}

const useSignup = () => {
	return { error, signup }
}

export default useSignup