import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const user = ref(projectAuth.currentUser)

// listen for authentication changes from firebase
projectAuth.onAuthStateChanged(_user => {
	console.log('User state changed. Current user is: ', _user)
	user.value = _user
})

const getUser = () => {
	return { user }
}

export default getUser