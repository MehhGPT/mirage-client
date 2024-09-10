import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import Discord from "next-auth/providers/discord";

export const options: NextAuthOptions = {
    providers: [
        Credentials({
            name: "MIRAGE",
            credentials: {
                userName: {
                    label: "UserName",
                    type: "text",
                    placeholder: "UserName",
                },
                userPassword: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                },
            },
            async authorize(credentials) {
				// ! Retrive user Data Here
                const user = { id: "96", name: "PATEL96", password: "rajvandan" }

                if (credentials?.userName === user.name && credentials?.userPassword === user.password) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID as string,
        //     clientSecret: process.env.GOOGLE_SECRET as string,
        // }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        // Discord({
		// 	clientId: process.env.DISCORD_ID as string,
		// 	clientSecret: process.env.DISCORD_SECRET as string
		// })
    ],
}