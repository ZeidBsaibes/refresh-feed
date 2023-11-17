import { withAuth } from "next-auth/middleware";

// middleware is applied to all routes, use conditionals to select

export default withAuth(
  function middleware(req, res) {
    console.log("middleware active");
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname.startsWith("/protected") && token === null) {
          console.log("not authorised");
          return false;
        }
        console.log("authorised");
        return true;
      },
    },
  }
);
