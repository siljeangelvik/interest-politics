import { useEffect } from "react";
import { useApiGet, TApiResponse } from "../../hooks/useApiGet"; // Adjust the path as needed
// import warsDataList from '../../data/wars.json';


const Home = () => {
    // Use the useApiGet hook to fetch wars.json data
    const { data, loading, error } = useApiGet<any[]>(`../../data/wars.json`);

    useEffect(() => {
        console.log(data); // Log the fetched data to verify

        // You can perform additional operations with the fetched data here
    }, [data]); // Run this effect whenever `data` changes

    return (
        <div>
            <h1>Home</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    {/* Render the fetched data */}
                    {data?.map((war: any) => (
                        <div key={war.id}>
                            <h2>{war.name}</h2>
                            <p>Duration: {war.duration}</p>
                            {/* Add more fields as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;

/*
<input
    type="text"
    placeholder="Search products..."
    value={searchInput}
    list={"dataList"}
    style={{
        marginBottom: '2rem',
        width: "300px",
        padding: "0.35rem",
        borderRadius: "0.25rem",
        border: "2px solid #ccc"
    }}
    onChange={e => setSearchInput(e.target.value)}
/>
*/
/*
<datalist id="dataList">
    {dataList?.map((item: string, index: Key) => {
        return (
            <option key={index} value={item}/>
        )
    })}
</datalist>
*/
/*
<div>
    {dataList?.filter((item: string) => item.toLowerCase().includes(searchInput.toLowerCase())).map((item: string, index: Key) => {
        return (
            <div key={index}>
                <div
                    id={data[index].id}
                    title={data[index].title}
                    imageUrl={data[index].imageUrl}
                    description={data[index].description}
                    price={data[index].price}
                    discountedPrice={data[index].discountedPrice}
                />
            </div>
        );
    })
    }
</div>
      */