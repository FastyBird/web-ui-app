import { TFbUiSwipeActionsOutDir } from '@/components/ui/FbSwipeActions/types'

export interface IFbUiSwipeActionsListProps {
  items: any[]
  threshold: number
  revealed: { [key: number]: TFbUiSwipeActionsOutDir }
  disabled: boolean
  itemDisabled: (item: any) => boolean
}
