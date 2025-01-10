function Button(props) {
    const { onClick, SvgIcon } = props;

    return (
        <button className="bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors hover:stroke-slate-200" onClick={onClick}>
            <SvgIcon />
        </button>
    );
}

export default Button;
