import className from "classnames";



function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
})




{
    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
    });


   

    return ( 
    <button className={classes} >{children}</button>
    );
}


Button.propTypes = {
checkVariationValue: ({primary, secondary, success, warning, danger}) =>{
    const count = Number(!!primary)
    + Number(!!secondary)
    + Number(!!warning)
    + Number(!!success)
    + Number(!!danger)

if (count > 1){
    return new Error('only one of primary, secondary, warning, success, danger can be true')
}


}

};


export default Button;