import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
	// may use for different collections in different components --> need to store error for each one
	const error = ref(null)

	const addDoc = async (doc) => {
		error.value = null
		try {
			await projectFirestore.collection(collection).add(doc)
		} catch (err) {
			console.log(err.message)
			error.value = 'Could not send message'
		}
	}

	return { addDoc, error }
}

export default useCollection
