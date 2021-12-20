export interface IInput {
    name?: string,
    type: 'text' | 'password',
    placeholder?: string,
    value: string,
    onChange?: (event: { target: {value: string, name: string}; }) => void,
    error?: boolean
}
