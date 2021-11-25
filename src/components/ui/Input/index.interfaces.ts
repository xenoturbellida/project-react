export interface IInput {
    name: string,
    type: 'submit' | 'text' | 'password',
    placeholder?: string,
    value: string,
    onChange?: (event: { target: {value: string, name: string}; }) => void
}
