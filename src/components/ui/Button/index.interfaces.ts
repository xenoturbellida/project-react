export interface IButton {
    onClick:  (event: { preventDefault: () => void;}) => void,
    title: string,
    mode?: 'primary' | 'secondary',
    disabled?: boolean
}
