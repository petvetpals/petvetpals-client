import axios from "axios"

const useUnsubscribeUser = async () => {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/push/unsubscribe-user`,
            { withCredentials: true }
        )
        console.log("Unsubscribed user successfully!")
    } catch (error) {
        console.error("Failed to unsubscribe user:", error)
    }
}

export default useUnsubscribeUser;