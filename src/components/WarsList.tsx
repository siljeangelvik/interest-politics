import {useEffect} from "react";
import '../App.css';
import {useApiGet} from "../hooks/useApiGet"; // Adjust the path as needed

const WarsList = () => {
    // Use the useApiGet hook to fetch wars.json data
    const {data, loading, error} = useApiGet<{ Wars: any[] }>("/wars.json");

    useEffect(() => {
        console.log(data); // Log the fetched data to verify

        // You can perform additional operations with the fetched data here
    }, [data]); // Run this effect whenever `data` changes

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    {/* Render the fetched data */}
                    {data?.Wars.map((war) => (
                        <div key={war.id}>
                            <h6>{war.name}</h6>
                            <p><strong>Duration: </strong>{war.duration}</p>

                            {/* Add more fields as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WarsList;