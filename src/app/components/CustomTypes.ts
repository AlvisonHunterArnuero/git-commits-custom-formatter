export type InputWithLabelProps = {
    labelText: string;
    labelClassName?: string;
    labelHtmlForId: string;
    inputOnChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
    id: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    inputType?: string;
    inputClassName?: string;
    wrapperClassName?: string;
};