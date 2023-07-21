import fetcher from "@/libs/fetcher";
import useSwr from "swr"


const useProperties = () => {

    const { data, error, isLoading, mutate } = useSwr('/api/properties', fetcher)

    return { data, error, isLoading, mutate }

};

export default useProperties;