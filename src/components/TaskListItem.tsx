'use client'

type TaskListItemProps = {
  children: React.ReactNode
  startTime: string
  endTime: string
  color: string
}

const colors = {
  red: "border-red-700",
  green: "border-green-700",
  gray: "border-gray-700",
  violet: "border-violet-700",
}

const bgs = {
  red: "hover:bg-red-700",
  green: "hover:bg-green-700",
  gray: "hover:bg-gray-700",
  violet: "hover:bg-violet-700",
}

export default function TaskListItem(props: TaskListItemProps) {
  return (
    <div className={`hover:bg-gray-100 min-h-9 h-fit flex gap-4 w-full px-1 items-center border-gray-600 overflow-x-hidden`} style={{ borderBottom: "1px solid rgb(200, 200, 200)" }}>
      <div className="w-[105px] flex justify-between">
        <span className="font-bold w-[50px] text-nowrap">{props.startTime}</span>
        <span className="w-[5px]">-</span>
        <span className="font-bold w-[50px] text-nowrap text-end">{props.endTime}</span>
      </div>
      <span className="text-nowrap">{props.children}</span>
      <span className="font-bold justify-self: end">+</span>
    </div>
  )
}