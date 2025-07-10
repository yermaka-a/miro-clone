import "react-router"

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  BOARDS: "/boards",
  BOARD: "/boards/:boardId",
} as const

export interface PathParams {
  [ROUTES.BOARD]: {
    boardId: string
  }
}

declare module "react-router-dom" {
  interface Register {
    params: PathParams
  }
}
