const Input = (props: any) => {
    return (
        <div className='flex items-center mb-2'>
            <label className='font-bold mr-4' htmlFor={props.input.id}>
                {props.label}
            </label>
            <input
                className='w-8 rounded-md border-[1px] border-[#8a2b06] pl-2'
                {...props.input}
            />
        </div>
    );
};

export default Input;
