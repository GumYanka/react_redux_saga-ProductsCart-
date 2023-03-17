const Card = (props: any) => {
    return (
        <div className='p-4 shadow-2xl rounded-2xl bg-white'>
            {props.children}
        </div>
    );
};

export default Card;
