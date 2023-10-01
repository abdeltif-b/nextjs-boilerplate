// protect the entire project using next-auth
export { default } from "next-auth/middleware";

// apply next-auth only to these matching routes
export const config = { matcher: ["/go-demo"] };
