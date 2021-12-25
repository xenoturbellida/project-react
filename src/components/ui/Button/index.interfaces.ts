export interface IButton {
    onClick:  (event: { preventDefault: () => void;}) => void,
    mode?: 'primary' | 'secondary',
    disabled?: boolean
}
