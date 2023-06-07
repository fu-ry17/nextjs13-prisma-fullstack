import prisma from "@/prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions, DefaultSession, NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      // ...other properties
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    role: string;
  }
}


export const authOptions: NextAuthOptions  = ({
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      })
    ],
    pages: {
        signIn: '/signIn'
    },
    callbacks: {
      session: ({ session, user }) => ({
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role
        },
      }),
    },
})