import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [Google],
  callbacks: {
    async session({ session, user }: any) {
      // This attaches the user's ID and stored Branch/Sem to the browser session
      if (session.user) {
        session.user.id = user.id;
        session.user.branch = user.branch; // We will save this later
        session.user.semester = user.semester; // We will save this later
      }
      return session;
    },
  },
})