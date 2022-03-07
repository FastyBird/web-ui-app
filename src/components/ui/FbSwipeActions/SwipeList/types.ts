import { TFbUiSwipeActionsOutDir } from '@/components/ui/FbSwipeActions/types'

export interface IFbUiSwipeActionsListProps<TItem> {
  items: TItem[]
  threshold?: number
  revealed?: { [key: number]: TFbUiSwipeActionsOutDir }
  disabled?: boolean
  itemDisabled?: (item: TItem) => boolean
}
