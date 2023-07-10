import fetcher from "@/libs/fetcher";
import useSwr from "swr"


const useUser = ( userId: string ) => {

    const { data, error, isLoading, mutate } = useSwr(userId ?  `/api/users/${userId}` : null, fetcher)

    return { data, error, isLoading, mutate }

};

export default useUser;