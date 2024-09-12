import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import type { Provider } from "next-auth/providers"
import github from "next-auth/providers/github"

const providers: Provider[] = [
	Google,
	github
]
export const { handlers, auth, signIn, signOut } = NextAuth({
	providers,
})
