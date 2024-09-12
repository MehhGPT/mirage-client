// Without a defined matcher, this one line applies next-auth 
// to the entire project
export { auth as middleware } from "@/auth"

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { matcher: ["/"] }