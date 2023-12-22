'use client'

type TaskListProps = {
  children: React.ReactNode
}

export default function TaskList(props: TaskListProps) {
  return (
    <div className="flex flex-col w-full">
      {props.children}
    </div>
  )
}
