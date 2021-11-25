export interface IInput {
    name: string,
    className: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (event: { target: {value: string, name: string}; }) => void
}
