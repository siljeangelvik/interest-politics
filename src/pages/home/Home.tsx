// import warsDataList from '../../data/wars.json';
// import * as data from '../../data/wars.json';

import WarsList from './components/WarsList'; // Adjust the path as needed

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <WarsList />
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