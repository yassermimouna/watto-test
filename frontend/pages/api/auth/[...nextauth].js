import NextAuth from 'next-auth'
import SessionProviders from 'next-auth/react'

export default NextAuth({
    providers : [
        /*SessionProviders.UserAccess({
           // userId: localStorage.getItem('id'),
            //token: localStorage.getItem('token'),
        })*/
    ]
})