function CarUpdate({car}){
   return (
       <> <br></br><h2> Car Details  : </h2> 
        <br></br>
        {
                   <div key = {car.id}>
                      <output>Id : {car.id}</output> <br></br>
                      <output>Brand : {car.brand}</output><br></br>
                      <output>Price : {car.price}</output><br></br>
                       <button> Delete </button>
                      </div> 
        }
       </>
   )
}

export default CarUpdate

export async function getServerSideProps(context){
    const { params } = context
    const { carid } = params
    console.log(carid);
    const response = await fetch('http://localhost:3000/api/car/'+carid)
    const data = await response.json()
    console.log(data);
    return {
        props: {
            car : data
        }
    }
}