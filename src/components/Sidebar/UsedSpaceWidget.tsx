export function UsedSpaceWidget() {
  return (
    <div className="space-x-3">
      <button
        type="button"
        className="text-sm font-medium text-violet-500 hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-500"
      >
        Dismiss
      </button>
      <button
        type="button"
        className="text-sm font-medium text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200"
      >
        Upgrade plan
      </button>
    </div>
  )
}
