import createFetchClient from "openapi-fetch"
import createClient from "openapi-react-query"
import type { paths } from "./schema/generated"
import { CONFIG } from "@/shared/model/config"

export const fetcClient = createFetchClient<paths>({
  baseUrl: CONFIG.API_BASE_URL,
})

export const rqClient = createClient(fetcClient)
