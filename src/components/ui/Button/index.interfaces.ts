export interface IButton {
    onClick:  (event: { preventDefault: () => void;}) => void,
    title: string
}
