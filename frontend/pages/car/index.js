function CarsList({cars}){
    return (<><h2> Cars  list : </h2>
    <table> <tr>
                    <th>Car Id</th>
                    <th>Car Brand</th>
                    <th>Car Price</th>
                    <th>Actions</th>
                  </tr>     
      {
          cars.map((car) => {
              return  (  
                
                  <tr key = {car.id}>
                    <td>{car.id}</td>
                    <td>{car.brand}</td>
                    <td>{car.price}</td>
                    <td><button> Delete </button><button>Update</button></td>
                  </tr>
              
                   )
          })
      }</table>
               </>)
}

export default CarsList

export async function getServerSideProps(){
    const response = await fetch('http://localhost:3000/api/car')
    const data = await response.json()
    console.log(data);
   return {
       props: {
           cars: data ,
       },
   }
}