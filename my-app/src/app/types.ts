export interface TodoType {
  id: number
  todo: string
  status: "backload" | "running" | "finish"
  priority: 1 | 2 | 3 | 4 | 5
}
