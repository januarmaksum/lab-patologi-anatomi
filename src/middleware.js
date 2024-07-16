export function middleware(request) {
  const currentUser = request.cookies.get("datauserlogin");

  if (request.nextUrl.pathname === "/") {
    if (currentUser) {
      return Response.redirect(new URL("/dashboard", request.url));
    } else {
      return Response.redirect(new URL("/login", request.url));
    }
  }

  if (currentUser && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
