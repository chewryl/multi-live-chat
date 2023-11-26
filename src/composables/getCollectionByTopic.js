import { projectFirestore } from "@/firebase/config"
import { ref, watchEffect } from "vue"

const getCollectionByTopic = (collection, topic) => {
	const docs = ref(null)
	const error = ref(null)

	let collectionRef = projectFirestore.collection(collection)
		.where('topic', '==', topic)
		.orderBy('createdAt')

	const unsub = collectionRef.onSnapshot(snap => {
		let results = []
		snap.docs.forEach(doc => {
			// using createdAt timestamp from firebase, not from local snapshot
			doc.data().createdAt &&	results.push({ ...doc.data(), id: doc.id })
		})
		docs.value = results
		error.value = null
	}, err => {
		console.log(err.message)
		docs.value = null
		error.value = 'Could not fetch data'
	})

	watchEffect(onInvalidate => {
		// unsub from prev collection when watcher is stopped (component unmounted)
		onInvalidate(() => unsub())
	})

	return { docs, error }
}

export default getCollectionByTopic