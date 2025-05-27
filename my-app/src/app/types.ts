export interface TodoType {
  id: number
  todo: string
  status: "backlog" | "running" | "finish"
  priority: 1 | 2 | 3 
}
