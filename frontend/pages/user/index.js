import Link from 'next/link'

function UserList({users}){
    return (<> <Link href="/user/adduser"><button>Add user</button></Link>
    <h2> users list : </h2>
      <table> <tr>
                      <th>User Id</th>
                      <th>User Email</th>
                      <th>User Role</th>
                      <th>Action</th>
                    </tr>     
        {
            users.map((user) => {
                return  ( 
                    <tr key = {user.id}>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td><button> Delete </button></td>
                    </tr>
                     )
            })
        }</table>
                 </>)
            
}

export default UserList

export async function getServerSideProps(){
    const response = await fetch('http://localhost:3000/api/user')
    const data = await response.json()
    console.log(data);
   return {
       props: {
           users: data ,
       },
   }
}