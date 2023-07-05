import Buttons from "../../components/button/Button";


function AddToCartButton({onClick}) {

    return (
        <div>
            <Buttons sx={{
                marginRight: "8rem",
                height: "2rem",
                width: "8rem",
                textTransform: "capitalize",
                fontSize: "1rem",
                backgroundColor: "transparent",
                color: "#3E8ED0",
                border: "1px solid",
                '&:hover': {
                    backgroundColor: "#C8E2F7",
                },
            }} name={"Add to cart"} onClick={onClick}/>
        </div>
    )
}

export default AddToCartButton;
