import axios from "axios"
import { useEffect, useState } from "react"

const useApps =()=>{
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState (null)

    useEffect(()=>{
        axios('').then(data => console.log(data.data))
    }, [])

    return {apps, loading, error }
}
export default useApps